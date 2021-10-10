var pluralize = require("pluralize");

const Output = require("../tools/Output");

const OUTPUT_MESSAGE = "Do not use mental mapping. Always use the singular form for the array iterator.";

function validate(data) {
  let errorsList = [];

  for (let i = 0; i < data.length; i++) {
    const line = data[i];

    const loopFunctions = line.split(/\.map\(|\.filter\(/);

    if (loopFunctions.length < 2) continue;

    let variableName = loopFunctions[1].split("=")[0];
    if (variableName[0] === "(")
      variableName = variableName.split("(").pop().split(")")[0];

    if (pluralize(variableName) !== loopFunctions[0]) {
      errorsList.push({
        line: i + 1,
      });
    }
  }

  if (errorsList.length)
    return { message: OUTPUT_MESSAGE, type: Output.types.WARNING, errorsList };
}

module.exports = { validate };
