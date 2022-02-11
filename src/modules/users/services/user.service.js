const db = require("../../../../db");

async function signOn(reqBody) {
  const queryTextCount = `SELECT COUNT (id) FROM public.user_registration WHERE email=$1 and password=$2`;
  const resultCount = (
    await db.query(queryTextCount, [reqBody.email, reqBody.password])
  ).rows[0]
    ? (await db.query(queryTextCount, [reqBody.email, reqBody.password]))
        .rows[0].count
    : 0;

  if (parseInt(resultCount) === 1) {
    const queryText = `SELECT * FROM public.user_registration WHERE email=$1 and password=$2`;
    const resultUserData = (
      await db.query(queryText, [reqBody.email, reqBody.password])
    ).rows[0];
    return resultUserData;
  } else {
    return new Error("Invalid Credentials");
  }
}

module.exports = {
  signOn,
};
