var os = require("os");

const negativeConditionalsValidator = require("../rules/negativeConditionals");
const commentsLengthValidator = require("../rules/commentsLength");
const funcParamsValidator = require("../rules/funcParams");

function validate(data) {
  let errors = [];
  const dataArray = data.split(os.EOL).map((line) => line.replace(/\s/g, ""));

  // const negativeConditionalsValidatorErrors =
  //   negativeConditionalsValidator.validate(dataArray);
  // if (negativeConditionalsValidatorErrors)
  //   errors.push(negativeConditionalsValidatorErrors);

  // const commentsLengthValidatorErrors =
  //   commentsLengthValidator.validate(dataArray);
  // if (commentsLengthValidatorErrors) errors.push(commentsLengthValidatorErrors);

  const funcParamsValidatorErrors = funcParamsValidator.validate(dataArray);
  if (funcParamsValidatorErrors) errors.push(funcParamsValidatorErrors);

  return errors;
}

module.exports = { validate };
