const { verifyLongLivedToken } = require("../utils/jwt");

function authorization() {
  return async (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (token) {
      try {
        const payload = await verifyLongLivedToken(token);
        if (payload) {
          req.user = payload;
          next();
        } else next(new Error("Authorization not provided"));
      } catch (ex) {
        next(new Error("Invalid Token"));
      }
    } else next(new Error("No Bearer Token Found"));
  };
}

module.exports = authorization;
