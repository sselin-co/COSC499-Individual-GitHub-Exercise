/**
 * Driver code: looks for valid prompts and prints or scans accordingly
 */

const prompt = require("prompt-sync")(); // Required to grab user input
const tools = require("./tools"); // Contains printer and scanner functions
const filename = "document.txt";
let correctPrompt = false;
while (!correctPrompt) {
  let input = prompt("Enter 'p' for printing and 's' for scanning: ");
  if (input === "p") {
    correctPrompt = true;
    input = prompt("Enter a text input: ");
    tools.printer(input, filename);
  } else if (input === "s") {
    correctPrompt = true;
    tools.scanner(filename);
  }
}
