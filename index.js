const printer = (input) => {
  let fs = require("fs");
  fs.writeFile("document.txt", input, function (err) {
    if (err) return console.log(err);
    console.log("[ %c" + input, "color: red", "] printed to document.txt");
  });
};

const prompt = require("prompt-sync")();

let correctPrompt = false;
while (!correctPrompt) {
  let input = prompt("Enter 'p' for printing and 's' for scanning: ");
  if (input === "p") {
    correctPrompt = true;
    input = prompt("Enter a text input: ");
    printer(input);
  }
}
