var os = require("os");

const negativeConditionalsValidator = require("../rules/negativeConditionals");
const commentsLengthValidator = require("../rules/commentsLength");
const funcParamsValidator = require("../rules/funcParams");
const mentalMappingValidator = require("../rules/mentalMapping");
const explanatoryVariablesValidator = require("../rules/explanatoryVariables");

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

  // const funcParamsValidatorErrors = funcParamsValidator.validate(dataArray);
  // if (funcParamsValidatorErrors) errors.push(funcParamsValidatorErrors);

  // const mentalMappingValidatorErrors = mentalMappingValidator.validate(dataArray);
  // if (mentalMappingValidatorErrors) errors.push(mentalMappingValidatorErrors);

  const explanatoryVariablesValidatorErrors =
    explanatoryVariablesValidator.validate(dataArray);
  if (explanatoryVariablesValidatorErrors)
    errors.push(explanatoryVariablesValidatorErrors);

  return errors;
}

module.exports = { validate };
