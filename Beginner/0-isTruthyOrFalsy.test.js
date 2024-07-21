const isTruthyOrFalsy = require("./0-isTruthyOrFalsy");

describe("isTruthy or falsy", () => {
  test("isTruthy values", () => {
    expect(isTruthyOrFalsy(true)).toBeTruthy();
    expect(isTruthyOrFalsy("hello")).toBeTruthy();
    expect(isTruthyOrFalsy(10)).toBeTruthy();
  });
  
});
describe("isfalsy", () => {
  test("isTruthy values", () => {
    expect(isTruthyOrFalsy(false)).toBeFalsy();
    expect(isTruthyOrFalsy("")).toBeFalsy();
    expect(isTruthyOrFalsy(0)).toBeFalsy();
    expect(isTruthyOrFalsy(null)).toBeFalsy();
  });
  
});
