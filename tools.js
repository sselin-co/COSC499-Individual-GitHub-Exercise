// Required for file I/O
const fs = require("fs");

module.exports = {
  /**
   * Takes a given input string and writes it to a given filename
   * @param {String} input
   * @param {String} filename
   */
  printer: function (input, filename) {
    fs.writeFile(filename, input, function (err) {
      if (err) return console.log(err);
      console.log("[ %c" + input, "color: red", "] printed to:", filename);
    });
  },
  /**
   * Reads data from document.txt and displays it to console
   * @param {String} filename
   */
  scanner: function (filename) {
    fs.readFile(filename, "utf8", function (err, data) {
      if (err) return console.log(err);
      console.log("[", data, "] scanned from:", filename);
    });
  },
};
