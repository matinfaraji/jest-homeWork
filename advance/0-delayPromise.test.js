const getUserWithDelay = require("./0-delayPromise.js");

describe("getUserWithDelay", () => {
  it("should return the correct user object after a delay", async () => {
    const userId = 42;
    const expectedUser = { id: userId, name: "User 42" };

    const actualUser = await getUserWithDelay(userId);

    expect(actualUser).toEqual(expectedUser);
  });

  it("should handle different user IDs", async () => {
    const userId1 = 10;
    const userId2 = 20;

    const user1 = await getUserWithDelay(userId1);
    const user2 = await getUserWithDelay(userId2);

    expect(user1.id).toBe(userId1);
    expect(user2.id).toBe(userId2);
  });
});
