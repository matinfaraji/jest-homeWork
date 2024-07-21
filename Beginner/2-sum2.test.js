const sum = require("./2-sum2");
it("test sum", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(-1, 2)).toBe(1);
  // expect(sum("hello", 2)).toThrow();
});
