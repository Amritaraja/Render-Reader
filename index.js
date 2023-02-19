// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email address so users can reach out to you for additional questions?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project?'
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does your project solve?'
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn from this project?'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how to use the application.'
    },
    {
        type: "input",
        name: "screenshot",
        message: "Add your screenshot to the `assets/images` folder. Then, using the relative filepath, add it below using the following syntax: ![alt text](assets/images/<Enter file name>)"
    },
    {
        type: "input",
        name: "credit",
        message: "List all collaborators and links to their GitHub Profile",
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for the application:',
        choices: ['gapl', 'apache', 'mit', 'mozilla', 'No license']
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide instructions on how users can test your project.' 
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide instructions on how users can contribute to your project.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);

        console.log("Your README has been created.")
    })
}; 

// TODO: Create a function to initialize app
function init() {

    console.log('Please answer the questions below to generate your README!');

inquirer.prompt(questions)
.then(data => {
    writeToFile("./output/sampleReadme.md", generateMarkdown(data))
    })
};

// Function call to initialize app
init();
