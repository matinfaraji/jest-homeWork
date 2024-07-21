const filterElement = require("./2-filterElement")
describe("filterElement array", () => {
    it("Filter for grape", () => {
      expect(filterElement([], "grape")).toEqual([]);
    });
  
    it("Filter for apple", () => {
      expect(filterElement(["apple"], "apple")).toEqual(["apple"]);
    });
  });