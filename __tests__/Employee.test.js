const Employee = require("../lib/Employee");

test("employee is created", () => {
  const employee = new Employee("Jack", 3, "jack@email.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("employee's name gets correctly", () => {
  const employee = new Employee("Jack", 3, "jack@email.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee("Jack", 3, "jack@email.com");

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee("Jack", 3, "jack@email.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee("Jack", 3, "jack@email.com");

    expect(employee.getRole()).toEqual("Employee");
}); 
