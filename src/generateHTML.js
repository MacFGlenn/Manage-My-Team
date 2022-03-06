const generateManager = function (manager) {
  return `
    <div>
        <div>
            <div class="card-header">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </div>

            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office-number">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

const generateEngineer = function (engineer) {
  return `
      <div>
          <div>
              <div class="card-header">
                  <h2>${engineer.name}</h2>
                  <h3>Manager</h3>
              </div>
  
              <div class="card-body">
                  <p class="id">ID: ${engineer.id}</p>
                  <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                  <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
              </div>
          </div>
      </div>
      `;
};

const generateIntern = function (intern) {
  return `
        <div>
            <div>
                <div class="card-header">
                    <h2>${intern.name}</h2>
                    <h3>Manager</h3>
                </div>
    
                <div class="card-body">
                    <p class="id">ID: ${intern.id}</p>
                    <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="school">School: ${intern.school}</p>
                </div>
            </div>
        </div>
        `;
};

generateHTML = (data) => {
  employeeArray = [];

  for (i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // might need to fix
    if (role === "Manager") {
      const manager = generateManager(employee);
      employeeArray.push(manager);
    } else if (role === "Engineer") {
      const engineer = generateEngineer(employee);
      employeeArray.push(engineer);
    } else if (role === "Intern") {
      const intern = generateIntern(employee);
      employeeArray.push(intern);
    }
  }

  const employees = employeeArray.join("");
  const generateTeam = generateMainHTML(employees);
  return generateTeam;
};

const generateMainHTML = function (employees) {
  return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Manage My Team</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
        Manage My Team
    <header>

    <main>
        <div>
            <div class="row justify-content" id="employees">
            ${employees}
            <div>
        <div>
    <main>
    `;
};

module.exports = generateHTML;
