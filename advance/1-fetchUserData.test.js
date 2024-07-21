const fetchUserData = require("./1-fetchUserData");

async function delayPromise(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test("delayPromise resolves after given time", async () => {
  const start = Date.now();
  await delayPromise(100);
  const end = Date.now();
  expect(end - start).toBeGreaterThanOrEqual(100);
});
