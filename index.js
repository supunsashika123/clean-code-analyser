#!/usr/bin/env node

const CLI = require("./cli");
const Console = require("./tools/Output.js");
const Validator = require("./tools/Validator");

function app() {
  //Load files
  const fs = require("fs");
  const path = require("path");

  const data = fs.readFileSync(path.resolve(__dirname + "/sample.js"), "utf8");

  //Validate files
  let responsesList = Validator.validate(data);

  responsesList.forEach((response) => {
    Console[response.type](JSON.stringify(response));
  });
}

let animation = CLI.animation("Analysing your source code..");

setTimeout(() => {
  app();
  clearInterval(animation);
}, 2000);
