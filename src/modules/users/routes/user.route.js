const express = require("express");
const authorization = require("../middlewares/user.middle");
const router = express.Router();
const { signOn } = require("../services/user.service");
const { getLongLivedToken } = require("../utils/jwt");
const { createUserSchema } = require("../validators/user.validator");

// create this router to handle the sign on request ansd return the access token which token is
// need to access the other routes

router.post("/signon", createUserSchema, async (req, res, next) => {
  let accessToken = null;
  const userData = await signOn(req.body);

  if (userData instanceof Error) {
    res.status(401).json({
      message: "Invalid Credentials",
    });
  } else {
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
  }
});

// now we use that acchess token to access the other routes

router.get("/", authorization(), async (req, res, next) => {
  return res.status(200).json({
    message: "Request Successful",
    data: {
      user: req.user,
    },
  });
});
module.exports = router;
