const SpellChecker = require("spellchecker");

const Output = require("../tools/Output");

const OUTPUT_MESSAGE = "Always use explanatory and searchable variable names.";

function validate(data) {
  let errorsList = [];

  for (let i = 0; i < data.length; i++) {
    const line = data[i];
    let variableNamesFormatted = [];
    let variableNames = line.split("function");

    if (variableNames.length < 2) {
      variableNames = line.split(/let|var|const/);

      if (variableNames.length > 1)
        variableNamesFormatted = variableNames[1]
          .split("=")[0]
          .split(/(?=[A-Z])/);
    } else {
      variableNamesFormatted = variableNames[1]
        .split("(")[0]
        .split(/(?=[A-Z])/);
    }

    variableNamesFormatted.forEach((name) => {
      if (SpellChecker.isMisspelled(name)) {
        errorsList.push({
          line: i + 1,
          text: name,
        });
      }
    });
  }

  if (errorsList.length)
    return { message: OUTPUT_MESSAGE, type: Output.types.WARNING, errorsList };
}

module.exports = { validate };
