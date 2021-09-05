const Console = require("./tools/Output.js")

function app() {
  //Load files
  const fs = require("fs");
  const path = require("path");

  const data = fs.readFileSync(path.resolve(__dirname + "/sample.js"), "utf8");

  //Validate files

  Console.success("woah");
  Console.warning("woah");
  Console.error("woah");
}

app()
