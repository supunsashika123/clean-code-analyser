const Console = require("./tools/Output.js")
const Validator = require("./tools/Validator")

function app() {
  //Load files
  const fs = require("fs");
  const path = require("path");

  const data = fs.readFileSync(path.resolve(__dirname + "/sample.js"), "utf8");

  //Validate files
  let err = Validator.validate(data)
  Console.error(JSON.stringify(err));
}

app()
