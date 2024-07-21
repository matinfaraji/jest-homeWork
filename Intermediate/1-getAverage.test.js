const getAverage = require("./1-getAverage");
describe("greater or less or equal than", () => {
  it("Average greater than 5", () => {
    expect(getAverage(6, 7, 6)).toBeGreaterThan(5);
  });
  it(" Average less than 5", () => {
    expect(getAverage(2, 3, 4)).toBeLessThan(5);
  });
  it("Average equal to 5 ", () => {
    expect(getAverage(4, 5, 6)).toBe(5);
  });
});
