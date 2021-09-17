let assert = require("assert");
const tools = require("../tools");
describe("printing", function () {
  describe("scanning", function () {
    it("should print 'test' to text.txt then scan it back", function () {
      let input = "test";
      let filename = "test/test.txt";
      tools.printer(input, filename);
      let data = tools.scanner(filename);
      assert.equal("test", data);
    });
  });
});
