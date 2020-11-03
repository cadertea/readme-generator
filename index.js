const fs = require("fs");
// const axios = require("axios");
const inquirer = require("inquirer");
const generatorMarkdown = require('./generateMarkdown')

// array of questions for user
const questions = [
    
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "username"
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "Email"
            },
            {
                type: "input",
                message: "What is the title of your project",
                name: "Title"
            },
            {
                type: "input",
                message: "Please give a description of your project",
                name: "Description"
            },
            {
                type: "input",
                message: "What necessary dependencies must be installed to run this app?",
                name: "Installation"
            },
            {
                type: "input",
                message: "What is that app used for?",
                name: "Usage"
            },
            {
                type: "list",
                choices:[ "MIT", "ISC", "APACHE 2.0", "GPL 3.0", "BSD 3.0"],
                message: "What license was used for this README?",
                name: "License"
            },
            {
                type: "input",
                message: "Any contributors?",
                name: "Contributor"
            },
            {
                type: "input",
                message: "What command is used to test this app?",
                name: "Test"
            },
        ];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync("./output/" + fileName, data , function(err){
        if(err){
            return console.log(err);
        }
        console.log("success, wrote: " + filename);
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        console.log(data)
        writeToFile("README.md", generatorMarkdown(data));
    })

}

// function call to initialize program
init();
