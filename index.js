/**
 * Driver code: looks for valid prompts and prints or scans accordingly
 */
const prompt = require("prompt-sync")(); // Required to grab user input
const tools = require("./tools"); // Contains printer and scanner functions
const filename = "document.txt";
let correctPrompt = false;
while (!correctPrompt) {
  // Prompts the user till a valid command is entered
  let input = prompt("Enter 'p' for printing and 's' for scanning: ");
  if (input === "p") {
    correctPrompt = true;
    input = prompt("Enter a text input: ");
    tools.printer(input, filename);
    console.log("[ %c" + input, "color: red", "] printed to:", filename);
  } else if (input === "s") {
    correctPrompt = true;
    let data = tools.scanner(filename);
    console.log("[", data, "] scanned from:", filename);
  }
}
