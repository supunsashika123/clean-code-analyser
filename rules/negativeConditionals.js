const ERROR_MESSAGE = "You should try to avoid negative if conditionals.";

function validate(data) {
  let errorsList = [];

  for (let i = 0; i < data.length; i++) {
    const line = data[i];

    const ifConditions = line.split("if(");

    if (
      ifConditions.length > 1 &&
      ifConditions[1] &&
      ifConditions[1][0] === "!"
    ) {
      errorsList.push({
        line: i + 1,
      });
    }
  }

  return { message: ERROR_MESSAGE, errorsList };
}

module.exports = { validate };
