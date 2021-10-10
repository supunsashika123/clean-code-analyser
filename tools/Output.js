const chalk = require("chalk");

const success = (message) => {
  console.log(chalk.green(message));
};

const warning = (message) => {
  console.log(chalk.yellow(message));
};

const error = (message) => {
  console.log(chalk.red(message));
};

const types = { ERROR: "error", WARNING: "warning", SUCCESS: "success" };

module.exports = { success, warning, error, types };
