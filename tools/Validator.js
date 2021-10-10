var os = require("os");

const negativeConditionalsValidator = require("../rules/negativeConditionals");

function validate(data) {
  let errors = [];
  const dataArray = data.split(os.EOL).map((line) => line.replace(/\s/g, ""));

  errors.push(negativeConditionalsValidator.validate(dataArray));

  return errors;
}

module.exports = { validate };
