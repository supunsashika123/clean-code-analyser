const logUpdate = require("log-update");
const spinner = require("./spinner.json");

function animation(message) {
  let i = 0;

  return setInterval(() => {
    const { frames } = spinner;
    logUpdate(`${frames[(i = ++i % frames.length)]} ${message}`);
  }, spinner.interval);
}

module.exports = { animation };
