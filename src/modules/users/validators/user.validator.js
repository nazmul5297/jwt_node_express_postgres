const { body, check } = require("express-validator");

const createUserSchema = [
  body("email").notEmpty().withMessage("emil field is empty"),
  body("password")
    .notEmpty()
    .withMessage("Password field is empty")
    .isLength({ min: 8 })
    .withMessage("Minimum password length is 8")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
    .withMessage(
      "Invalid password, it must contain Capital Letter, Small Letter, Number and Special Character"
    ),
];

module.exports = {
  createUserSchema,
};
