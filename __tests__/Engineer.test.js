const Engineer = require("../lib/Engineer");

test("Engineer is created", () => {
  const engineer = new Engineer("Jack", 3, "jack@email.com", "jackgotagithub");

  expect(engineer.github).toEqual(expect.any(String));
});

test("gets employee's github", () => {
  const engineer = new Engineer("Jack", 3, "jack@email.com", "jackgotagithub");

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

test("gets employee's role", () => {
  const engineer = new Engineer("Jack", 3, "jack@email.com", "jackgotagithub");

  expect(engineer.getRole()).toEqual("Engineer");
});
