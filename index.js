const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
// need to add an html file

const employee = require("./lib/Employee");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");

///////Inquirer////////////////

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
      message: "Please enter employees office number:",
      name: "office",
    },

    {
      type: "list",
      name: "role",
      choices: ["Engineer", "Intern", "Done adding Team Members"],
    },
  ])
  .then(
    async (answers) => await fs.writeFileSync("index.html", generateHTML(answers))
  )
  .then(() => console.log("HTML document succesfully created!"));

/////Function to write HTML file////////////////

const generateHTML = function (writeFile) {
  const htmlDoc = ` <!DOCTYPE html>
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
                      <div style="float:left; width: 300px; background-color: white; border-radius: 10px; box-shadow: 6px 6px gray; margin: 10px 10px 10px 10px;">
                          <p style="width:300px; position:relative; color:white; font-size:2rem; background-color: tomato; align-items: center; text-align: center; padding-bottom: 15px; padding-top: 10px; text-shadow: 1px 1px black; margin: 0%; border-radius: 10px 10px 0px 0px;" >Name</br> <span>&#9749;${writeFile.name}</span></p>
                          <div style="border-radius:10px; padding: 5px;">
                              <p type="text" style="width: 200px; padding-left: 5px;">ID: ${writeFile.id}</p>
                              <p type="text" style="width: 200px; padding-left: 5px;">Email: ${writeFile.email}</p>   
                              <p type="text" style="width: 200px; padding-left: 5px;">Office Number: ${writeFile.office}</p>     
                          </div>
                      </div>
          
                      <div style="float:right; width: 300px; background-color: white; border-radius: 10px; box-shadow: 6px 6px gray; margin: 10px 10px 10px 10px;">
                          <p style="width:300px; position:relative; color:white; font-size:2rem; background-color: tomato; align-items: center; text-align: center; padding-bottom: 15px; padding-top: 10px; text-shadow: 1px 1px black; margin: 0%; border-radius: 10px 10px 0px 0px;">Name</br> <span>&#128083;Engineer</span></p>
                          <div style="padding: 5px; margin: 0px 0px 0px 10px; ">
                              <p type="text" style="width: 200px; padding-left: 5px;">ID:</p>
                              <p type="text" style="width: 200px; padding-left: 5px;">Email:</p>   
                              <p type="text" style="width: 200px; padding-left: 5px;">Office Number:</p>   
                          </div>
                      </div>
          
                      <div style="float:right; width: 300px; background-color: white; border-radius: 10px; box-shadow: 6px 6px gray; margin: 10px 10px 10px 10px;">
                          <p style="width:300px; position:relative; color:white; font-size:2rem; background-color: tomato; align-items: center; text-align: center; padding-bottom: 15px; padding-top: 10px; text-shadow: 1px 1px black; margin: 0%; border-radius: 10px 10px 0px 0px;" >Name</br> <span>&#128083;Engineer</span></p>
                          <div style="padding: 5px;">
                              <p type="text" style="width: 200px; padding-left: 5px;">ID:</p>
                              <p type="text" style="width: 200px; padding-left: 5px;">Email:</p>   
                              <p type="text" style="width: 200px; padding-left: 5px;">Office Number:</p>   
                          </div>
                      </div>  
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

  return htmlDoc;
};
