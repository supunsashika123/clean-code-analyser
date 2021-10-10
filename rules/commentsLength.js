const Output = require("../tools/Output");

const OUTPUT_MESSAGE = "Comments should be less than 5 lines.";

function validate(data) {
  let errorsList = [];
  let consecutiveLines = 0;

  for (let i = 0; i < data.length; i++) {
    if (consecutiveLines === 5) {
      errorsList.push({
        line: i,
      });
    }

    const line = data[i];
    const linesWithComments = line.split("//");

    if (linesWithComments.length > 1) {
      consecutiveLines += 1;
    } else {
      consecutiveLines = 0;
    }
  }

  if (errorsList.length)
    return { message: OUTPUT_MESSAGE, type: Output.types.WARNING, errorsList };
}

module.exports = { validate };
