const Manager = require("../lib/Manager");

test("Manager is created", () => {
  const manager = new Manager("Jack", 3, "jack@email.com", 42);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets employee's role", () => {
  const manager = new Manager("Jack", 3, "jack@email.com", 42);

  expect(manager.getRole()).toEqual("Manager");
});
