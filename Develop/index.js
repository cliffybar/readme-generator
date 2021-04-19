// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?"
        },
        {
            type: "input",
            name: "description",
            message: "What is the project description?"
        },
        {
            type: "input",
            name: "installation",
            message: "How is this project installed?"
        },
        {
            type: "input",
            name: "usage",
            message: "How do you use this app?"
        },
        {
            type: "input",
            name: "contributions",
            message: "Please list all contributors to this project."
        },
        {
            type: "input",
            name: "license",
            message: "Please choose a license for yur projecty.",
            choices: ["Apache", "GPL", "MIT", "N/A"]
        },
        {
            type: "input",
            name: "tests",
            message: "How does a user test this app?"
        },
        {
            type: "input",
            name: "username",
            message: "What is your github username?"
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is your GitHub repo link?"
        }
    ])
};

questions()
    .then(function(data) {
        const queryURL = `https://api.github.com/users${data.username}`;

        fs.writeFile("README.md", generate(data), function(err) {
            if (err) {
                throw err;
            } else {
                console.log("Congratulations! You have created a README.md successfully!")
            };
        });
    }
);

function init() {};

init();

