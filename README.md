# Clean Code Analyser
A package which analyses the JavaScript code against the Clean Code concepts.

Code is clean if it can be understood easily – by everyone on the team. Clean code can be read and enhanced by a developer other than its original author. With understandability comes readability, changeability, extensibility and maintainability.

Here is an awesome [gist](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29) about Clean Code concepts.

_____________________________________

This library is only focused on Vanilla JS and basic validations.

#### Rules
1. Use explanatory variables.
2. Event handler function names.
3. Function parameter validations.
4. Avoid mental mappings.
5. Avoid negative conditionals.
6. Comments length validation.

## Installation

Use the node package manager to install clean-code-analyser.

```bash
npm install clean-code-analyser
```

Run the initializer command in terminal window inside the project.

```bash
cd node_modules/clean-code-analyser && npm run config && cd ../../
```

Add the script to your package.json scripts section.

```javascript
"scripts": {
  ...
  "cca": "cd node_modules/clean-code-analyser && npm run cca  && cd ../../"
}
```

## Usage

Run the command to test your source code with Clean Code concepts.

```bash
npm run cca
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
