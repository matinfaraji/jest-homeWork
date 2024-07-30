const checkAge = require("./0-checkAge");
it("age greater than 18", () => {
  expect(checkAge(20)).toBe("You are eligible");
  expect(checkAge(19)).toBe("You are eligible");
});
it("age less than or equal to 18", () => {
  expect(checkAge(18)).toBeUndefined(undefined);
  expect(checkAge(19)).not.toBeUndefined(undefined);
});
