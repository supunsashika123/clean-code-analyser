#!/usr/bin/env node
const glob = require("glob");

const CLI = require("./cli");
const Console = require("./tools/Output.js");
const Validator = require("./tools/Validator");

function app() {
  //Load files
  const fs = require("fs");
  const path = require("path");

  // glob(
  //   path.resolve(__dirname) + "/../*.js",
  //   { ignore: ["*node_modules*"] },
  //   function (er, files) {
  //     console.log(files);
  //     // files is an array of filenames.
  //     // If the `nonull` option is set, and nothing
  //     // was found, then files is ["**/*.js"]
  //     // er is an error object or null.
  //   }
  // );

  // const datasss = fs.readdirSync(path.resolve(__dirname + "/../test/"));

  // console.log(datasss);

  const data = fs.readFileSync(
    path.resolve(__dirname + "/sample.js"),
    "utf8"
  );

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
