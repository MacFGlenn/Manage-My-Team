const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");

const teamMembers = [];

const newManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter manager's name",
      },
      {
        type: "input",
        name: "id",
        message: "Enter manager's id number",
      },
      {
        type: "input",
        name: "email",
        message: "Enter manager's email",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter manager's office number",
      },
    ])
    .then((managerData) => {
      const { name, id, email, officeNumber } = managerData;
      const manager = new Manager(name, id, email, officeNumber);

      teamMembers.push(manager);
    });
};

const newEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "rawlist",
        name: "role",
        message: "Choose employee's role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Enter employee's name",
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee's id",
      },
      {
        type: "input",
        name: "email",
        message: "Enter employee's email",
      },
      {
        when: (input) => input.role === "Engineer",
        type: "input",
        name: "github",
        message: "Enter employee's github username",
      },
      {
        when: (input) => input.role === "Intern",
        type: "input",
        name: "school",
        message: "Enter employee's school",
      },
      {
        type: "confirm",
        name: "confirmNewEmployee",
        message: "Add another employee?",
        default: false,
      },
    ])
    .then((employeeData) => {
      let { name, id, email, role, github, school, confirmNewEmployee } =
        employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
      }

      teamMembers.push(employee);

      if (confirmNewEmployee) {
        return newEmployee(teamMembers);
      } else {
        return teamMembers;
      }
    });
};
