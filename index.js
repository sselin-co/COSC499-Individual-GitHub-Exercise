// Required for file I/O
const fs = require("fs");
// Required to grab user input
const prompt = require("prompt-sync")();

/**
 * Takes a given input string and writes it to document.txt
 * @param {String} input
 */
const printer = (input) => {
  fs.writeFile("document.txt", "utf8", input, function (err) {
    if (err) return console.log(err);
    console.log("[ %c" + input, "color: red", "] printed to document.txt");
  });
};

/**
 * Reads data from document.txt and displays it
 */
const scanner = () => {
  fs.readFile("document.txt", "utf8", function (err, data) {
    if (err) return console.log(err);
    console.log(data);
  });
};

/**
 * Driver code: looks for valid prompts and prints or scans accordingly
 */
let correctPrompt = false;
while (!correctPrompt) {
  let input = prompt("Enter 'p' for printing and 's' for scanning: ");
  if (input === "p") {
    correctPrompt = true;
    input = prompt("Enter a text input: ");
    printer(input);
  } else if (input === "s") {
    correctPrompt = true;
    scanner();
  }
}
