#!/usr/bin/env node
const glob = require("glob");

const CLI = require("./cli");
const Console = require("./tools/Output.js");
const Validator = require("./tools/Validator");

function app() {
  //Load files
  const fs = require("fs");
  const path = require("path");

  let responsesList = [];

  glob(
    path.resolve(__dirname) + "/../../*.js",
    { ignore: ["*node_modules*"] },
    function (er, files) {
      if (!files) {
        return Console.success("No JS files found.");
      }
      files.forEach((file) => {
        const data = fs.readFileSync(file, "utf8");
        responsesList.push({
          file: file,
          validations: Validator.validate(data),
        });
      });

      responsesList.forEach((response) => {
        response.validations.forEach((error) => {
          Console[error.type]("\n\n**" + error.message);

          error.errorsList.forEach((e, i) => {
            let errText = `${i + 1}. On line ${e.line}. File: ${
              response.file
            }:${e.line}`;
            if (e.text) errText += ` Text: ${e.text}`;

            Console[error.type](errText);
          });
        });
      });

      if (!responsesList.filter((r) => r.validations.length).length) {
        Console.success("All good!");
      }
    }
  );
}

let animation = CLI.animation("Analysing your source code..");

setTimeout(() => {
  app();
  clearInterval(animation);
}, 2000);
