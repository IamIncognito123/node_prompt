// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const file = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = ['What is your github username?', 'What is your email?', 'What is the title of your project?', 'Give a brief description of your project.', 'Are there any installations? If so provide instructions.', 'Provide any usage information.', 'Provide information regarding contributors.', 'Provide test instructions.'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    file.renderLicenseBadge(data);
    fs.writeFileSync(fileName, file.generateMarkdown(data))



}


// TODO: Create a function to initialize app
function init() {
userPrompt();
// file.renderLicenseBadge();

}

const userPrompt = () => {

    inquirer
    .prompt([

        {
            type: 'input',
            message: questions[0],
            name: 'name'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'email'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'contribution'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'test'
        },
        {
            type: 'list',
            name: 'license',
            choices: ['Apache 2.0', 'Boost', 'Eclipse']
        }

    ])
    .then((data) => writeToFile('README.md', data))
    // .then((data) => file.renderLicenseBadge(data))
    .then(() => console.log(`Data successfully logged`))
    .catch((err) => console.error(err))
}


// Function call to initialize app
init();


