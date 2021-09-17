// Required for file I/O
const fs = require("fs");

module.exports = {
  /**
   * Takes a given input string and writes it to a given filename
   * @param {String} input - user supplied string
   * @param {String} filename - name of targeted file
   */
  printer: function (input, filename) {
    fs.writeFileSync(filename, input);
    console.log("[ %c" + input, "color: red", "] printed to:", filename);
  },
  /**
   * Reads data from document.txt and displays it to console
   * @param {String} filename - name of targeted file
   * @returns data from targeted file
   */
  scanner: function (filename) {
    let data = fs.readFileSync(filename, "utf8");
    console.log("[", data, "] scanned from:", filename);
    return data;
  },
};
