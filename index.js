const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
// need to add an html file

// const employee = require("./lib/Employee");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const employee = require("./lib/Employee");

// const employee = new Employee

///////Inquirer////////////////
///// need to start with manager//////////

const managerInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter Manager's name:",
        name: "name",
      },

      {
        type: "input",
        message: "Please enter Manager's ID:",
        name: "id",
      },

      {
        type: "input",
        message: "Please enter Manager's email:",
        name: "email",
      },

      {
        type: "input",
        message: "Please enter Manager's office number:",
        name: "office",
      },

      // {
      //   type: "input",
      //   message: "Please enter your gitHub username:",
      //   name: "github",
      // },

      {
        type: "list",
        message: "Would you like to add another employee?",
        name: "employee",
        choices: ["Engineer", "Intern", "I am done adding Team Members"],
      },
    ])
    // .then(
    //   async (answers) => await fs.writeFileSync("index.html", generateHTML(answers))
    // );

    .then((answers) => {
      managerData = `<div style="float:left; width: 300px; background-color: white; border-radius: 10px; box-shadow: 6px 6px gray; margin: 10px 10px 10px 10px;">
        <p style="width:300px; position:relative; color:white; font-size:2rem; background-color: tomato; align-items: center; text-align: center; padding-bottom: 15px; padding-top: 10px; text-shadow: 1px 1px black; margin: 0%; border-radius: 10px 10px 0px 0px;" >${answers.name}</br> <span>&#9749;${answers.role}</span></p>
        <div style="border-radius:10px; padding: 5px;">
            <p type="text" style="width: 200px; padding-left: 5px;">ID: ${answers.id}</p>
            <p type="text" style="width: 200px; padding-left: 5px;">Email: ${answers.email}</p>   
            <p type="text" style="width: 200px; padding-left: 5px;">Office Number: ${answers.office}</p>     
        </div>
    </div>`;
      addEmployee();
    });
};

////////////////////////ENGINEER///////////////////////////////////

const engineerInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter employees name:",
        name: "name",
      },

      {
        type: "input",
        message: "Please enter employees ID:",
        name: "id",
      },

      {
        type: "input",
        message: "Please enter employees email:",
        name: "email",
      },

      {
        type: "input",
        message: "Please enter your gitHub username:",
        name: "github",
      },
    ])
    .then((answers) => {
      engineerData = `<div style="float:left; width: 300px; background-color: white; border-radius: 10px; box-shadow: 6px 6px gray; margin: 10px 10px 10px 10px;">
      <p style="width:300px; position:relative; color:white; font-size:2rem; background-color: tomato; align-items: center; text-align: center; padding-bottom: 15px; padding-top: 10px; text-shadow: 1px 1px black; margin: 0%; border-radius: 10px 10px 0px 0px;" >${answers.name}</br> <span>&#9749;${answers.role}</span></p>
      <div style="border-radius:10px; padding: 5px;">
          <p type="text" style="width: 200px; padding-left: 5px;">ID: ${answers.id}</p>
          <p type="text" style="width: 200px; padding-left: 5px;">Email: ${answers.email}</p>   
          <p type="text" style="width: 200px; padding-left: 5px;">GitHub: ${answers.github}</p>     
      </div>
  </div>`;
      addEmployee();
    });
};

///////////////////////////INTERN/////////////////////////////////////////

const interInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter employees name:",
        name: "name",
      },

      {
        type: "input",
        message: "Please enter employees ID:",
        name: "id",
      },

      {
        type: "input",
        message: "Please enter employees email:",
        name: "email",
      },

      {
        type: "input",
        message: "Please enter your school name:",
        name: "school",
      },
    ])
    .then((answers) => {
      internData = `<div style="float:left; width: 300px; background-color: white; border-radius: 10px; box-shadow: 6px 6px gray; margin: 10px 10px 10px 10px;">
      <p style="width:300px; position:relative; color:white; font-size:2rem; background-color: tomato; align-items: center; text-align: center; padding-bottom: 15px; padding-top: 10px; text-shadow: 1px 1px black; margin: 0%; border-radius: 10px 10px 0px 0px;" >${answers.name}</br> <span>&#9749;${answers.role}</span></p>
      <div style="border-radius:10px; padding: 5px;">
          <p type="text" style="width: 200px; padding-left: 5px;">ID: ${answers.id}</p>
          <p type="text" style="width: 200px; padding-left: 5px;">Email: ${answers.email}</p>   
          <p type="text" style="width: 200px; padding-left: 5px;">School Name: ${answers.school}</p>     
      </div>
  </div>`;
      addEmployee();
    });
};

/////////////////Adding a new employee//////////////

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "newItem",
        message: "Would you like to add another employee",
        choices: ["Engineer", "Intern", "I don't need to add more employees"],
      },
    ])

    .then((answer) => {
      if (answer.newItem === "Engineer") {
        engineerInfo();
      } else if (answer.newItem === "Intern") {
        interInfo();
      } else {
        generateHTML();
      }
    });
}

/////Function to write HTML file////////////////

const generateHTML = function () {
  htmlDoc = ` <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
        </head>
        <body>
            <main>
                <header
                  style="
                    background-color: dodgerblue;
                    color: aliceblue;
                    font-weight: bold;
                    height: 150px;
                    text-align: center;
                    align-items: center;
                    font-size: 3.5rem;
                    font-family: sans-serif;
                    position: relative;
                    padding-top: 60px;
                    margin-bottom: 50px;
                    text-shadow: 2px 2px black;
                  "
                >
                  My Team
                </header>
          
                <div style="display:inline-block; position: relative; margin-left: 250px;">
                      ${managerData}
          
                      ${engineerData}
                      
                      ${internData}
           
                </div>
          
                <div style="display:inline-block; position: inherit; margin-left: 400px;">
                      <div style="float:left; width: 300px; background-color: white; border-radius: 10px; box-shadow: 6px 6px gray; margin: 10px 10px 10px 10px;">
                          <p style="width:300px; position:relative; color:white; font-size:2rem; background-color: tomato; align-items: center; text-align: center; padding-bottom: 15px; padding-top: 10px; text-shadow: 1px 1px black; margin: 0%; border-radius:10px 10px 0px 0px;" >Name</br> <span>&#128083;Engineer</span></p>
                          <div style="border-radius:10px; padding: 5px;">
                              <p type="text" style="width: 200px; padding-left: 5px;">ID:</p>
                              <p type="text" style="width: 200px; padding-left: 5px;">Email:</p>   
                              <p type="text" style="width: 200px; padding-left: 5px;">Office Number:</p>     
                          </div>
                      </div>
          
                      <div style="float:right; width: 300px; background-color: white; border-radius: 10px; box-shadow: 6px 6px gray; margin: 10px 10px 10px 10px;">
                          <p style="width:300px; position:relative; color:white; font-size:2rem; background-color: tomato; align-items: center; text-align: center; padding-bottom: 15px; padding-top: 10px; text-shadow: 1px 1px black; margin: 0%; border-radius:10px 10px 0px 0px;"  >Name</br> <span>&#127891;Intern</span></p>
                          <div style="border-radius:10px; padding: 5px;">
                              <p type="text" style="width: 200px; padding-left: 5px;">ID:</p>
                              <p type="text" style="width: 200px; padding-left: 5px;">Email:</p>   
                              <p type="text" style="width: 200px; padding-left: 5px;">Office Number:</p>   
                          </div>
                      </div>
          
                  </div>
          
              </main>
        
        </body>
        </html> `;

  fs.writeFile("index.html", htmlDoc, (err) => {
    err ? console.error(err) : console.log("Succesfully wrote HTML doc");
  });
};

managerInfo();
