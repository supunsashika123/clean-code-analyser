const Output = require("../tools/Output");

const OUTPUT_MESSAGE =
  "Functions should have maximum 3 parameters. Parameters should be destructered if the count is above 3.";

function validate(data) {
  let errorsList = [];

  for (let i = 0; i < data.length; i++) {
    const line = data[i];
    const functionNames = line.split("function");

    if (functionNames.length > 1) {
      functionNames.forEach((functionName) => {
        if (!functionName) return;

        let paramsString = functionName.split("(").pop().split(")")[0];

        if (paramsString[0] === "{") return;
        if (!paramsString) return;

        let paramsCount = paramsString.split(",").length;
        if (paramsCount > 3) {
          errorsList.push({
            line: i + 1,
          });
        }
      });
    }
  }

  if (errorsList.length)
    return { message: OUTPUT_MESSAGE, type: Output.types.WARNING, errorsList };
}

module.exports = { validate };
