// Required for file I/O
const fs = require("fs");

module.exports = {
  /**
   * Takes a given input string and writes it to a given filename
   * @param {String} input - user supplied string
   * @param {String} filename - name of targeted file
   */
  printer: (input, filename) => {
    fs.writeFileSync(filename, input);
  },
  /**
   * Reads data from filename and displays it to console
   * @param {String} filename - name of targeted file
   * @returns data from targeted file
   */
  scanner: (filename) => {
    let data = fs.readFileSync(filename, "utf8");
    return data;
  },
};
