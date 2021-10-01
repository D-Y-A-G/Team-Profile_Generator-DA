const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
// need to add an html file

const employee = require("./lib/Employee");
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern')


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
        name: "name",
     },  

     {
        type: "input",
        message: "Please enter employees email:",
        name: "name",
     },  

     {
        type: "input",
        message: "Please enter employees office number:",
        name: "name",
     },  

     {
        type: "list",
        name: "role",
        choices: ["Engineer", "Intern", "Done adding Team Members"] 
     },  





    ])