const chalk = require('chalk')

const success = (message) => {
  console.log(chalk.green(message));
};

const warning = (message) => {
  console.log(chalk.yellow(message));
};

const error = (message) => {
  console.log(chalk.red(message));
};

module.exports = { success, warning, error };
