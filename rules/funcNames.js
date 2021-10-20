const { requireF } = require("../tools/Utils");
const Output = require("../tools/Output");

const config = requireF("../cca.config.json");

const OUTPUT_MESSAGE =
  "Same prefix should be used for event handler functions.";

function validate(data) {
  let errorsList = [];
  let eventHandlerPrefix = config.eventHandlerPrefix
    ? config.eventHandlerPrefix
    : "handle";

  for (let i = 0; i < data.length; i++) {
    const line = data[i];
    let handlerFunctions = line.split("onClick={");
    let handlerFunctionName = "";

    if (handlerFunctions.length > 1) {
      if (handlerFunctions[1][0] === "(") {
        handlerFunctionName = handlerFunctions[1]
          .split("=>")
          .pop()
          .split("(")[0];
      } else {
        handlerFunctionName = handlerFunctions[1].split("}")[0];
      }

      if (
        handlerFunctionName.substring(0, eventHandlerPrefix.length) !==
        eventHandlerPrefix
      ) {
        errorsList.push({
          line: i + 1,
          text: handlerFunctionName,
        });
      }
    }
  }

  if (errorsList.length)
    return { message: OUTPUT_MESSAGE, type: Output.types.WARNING, errorsList };
}

module.exports = { validate };
