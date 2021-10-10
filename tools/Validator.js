var os = require("os");

const negativeConditionalsValidator = require("../rules/negativeConditionals");
const commentsLengthValidator = require("../rules/commentsLength");

function validate(data) {
  let errors = [];
  const dataArray = data.split(os.EOL).map((line) => line.replace(/\s/g, ""));

  const negativeConditionalsValidatorErrors =
    negativeConditionalsValidator.validate(dataArray);
  if (negativeConditionalsValidatorErrors)
    errors.push(negativeConditionalsValidatorErrors);

  const commentsLengthValidatorErrors =
    commentsLengthValidator.validate(dataArray);
  if (commentsLengthValidatorErrors) errors.push(commentsLengthValidatorErrors);

  return errors;
}

module.exports = { validate };
