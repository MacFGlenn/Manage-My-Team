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
  return inquirer.prompt([
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
        type: 'input',
        name: 'id',
        message: "Enter employee's id"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter employee's email"
    },
    {
        type: "input",
        name: "github",
        message: "Enter employee's github username"
    }
  ]);
};
