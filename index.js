const printer = (input) => {
  let fs = require("fs");
  fs.writeFile("document.txt", input, function (err) {
    if (err) return console.log(err);
    console.log("[ %c" + input, "color: red", "] printed to document.txt");
  });
};

const prompt = require("prompt-sync")();
const input = prompt("Enter input: ");
printer(input);
