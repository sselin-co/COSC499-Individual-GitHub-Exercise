let assert = require("assert");
const tools = require("../tools");
describe("printing", () => {
  describe("scanning", () => {
    it("should print 'test' to test.txt then scan it back", () => {
      let input = "test";
      let filename = "test/test.txt";
      tools.printer(input, filename);
      let data = tools.scanner(filename);
      assert.equal("test", data);
    });
  });
});
