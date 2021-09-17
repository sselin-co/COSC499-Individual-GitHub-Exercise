/**
 * Asserts if the input variable is equal to 'test'
 */
let assert = require("assert");
const tools = require("../tools");
describe("printing", () => {
  describe("scanning", () => {
    it("should print 'test' to test.txt then scan it back", () => {
      let input = "test";
      let filename = "test/test.txt";
      tools.printer(input, filename);
      let data = tools.scanner(filename);
      assert.equal(input, data);
    });
  });
});
describe("printing nothing", () => {
  describe("scanning", () => {
    it("should print '' to test.txt then scan it back", () => {
      let input = "";
      let filename = "test/test.txt";
      tools.printer(input, filename);
      let data = tools.scanner(filename);
      assert.equal(input, data);
    });
  });
});
describe("printing a large string", () => {
  describe("scanning", () => {
    it("should print input from lorem.txt to test.txt then scan it back", () => {
      let input = tools.scanner("test/lorem.txt");
      let filename = "test/test.txt";
      tools.printer(input, filename);
      let data = tools.scanner(filename);
      assert.equal(input, data);
    });
  });
});
describe("printing undefined", () => {
  describe("scanning", () => {
    it("should print input from lorem.txt to test.txt then scan it back", () => {
      let input = undefined;
      let filename = "test/test.txt";
      tools.printer(input, filename);
      let data = tools.scanner(filename);
      assert.equal(input, data);
    });
  });
});
