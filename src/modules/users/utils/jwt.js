const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

// const configPath = path.resolve(__dirname + "/../../../../config.json");
// const appConf = JSON.parse(fs.readFileSync(configPath, "utf-8"));

async function getLongLivedToken(body, expireTime) {
  return new Promise((resolve, reject) => {
    try {
      const secret = "APP";
      jwt.sign(body, secret, { expiresIn: expireTime }, (err, token) => {
        if (err) reject(err);
        if (token) resolve(token);
      });
    } catch (ex) {
      reject(ex);
    }
  });
}

async function verifyLongLivedToken(token) {
  return new Promise((resolve, reject) => {
    try {
      const secret = appConf.JWT_SECRET;
      jwt.verify(token, secret, (err, payload) => {
        if (err) reject(err);
        resolve(payload);
      });
    } catch (ex) {
      reject(ex);
    }
  });
}

module.exports = {
  getLongLivedToken,
  verifyLongLivedToken,
};
