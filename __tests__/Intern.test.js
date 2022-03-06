const Intern = require("../lib/Intern");

test("Intern is created", () => {
  const intern = new Intern("Jack", 3, "jack@email.com", "USFS");

  expect(intern.school).toEqual(expect.any(String));
});

test("gets employee's school", () => {
  const intern = new Intern("Jack", 3, "jack@email.com", "USFS");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

test("gets employee's role", () => {
  const intern = new Intern("Jack", 3, "jack@email.com", "USFS");

  expect(intern.getRole()).toEqual("Intern");
});
