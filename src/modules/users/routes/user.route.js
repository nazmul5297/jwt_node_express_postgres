const express = require("express");
const router = express.Router();
const { signOn } = require("../services/user.service");
const { getLongLivedToken } = require("../utils/jwt");

router.post("/signon", async (req, res, next) => {
  let accessToken = null;
  console.log(req.body);
  const userData = await signOn(req.body);
  console.log(userData);
  req.user = userData;

  accessToken = await getLongLivedToken(
    {
      userId: userData.id,
      name: userData.name,
    },
    "120h"
  );

  return res.status(200).json({
    message: "Request Successful",
    data: {
      accessToken: accessToken,
    },
  });
});

module.exports = router;
