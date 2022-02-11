const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

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
      const secret = "APP";
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
