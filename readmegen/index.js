var inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require ('./readmeContent');


inquirer
  .prompt([
      {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'projectTitle',
      },
      {
        type: 'input',
        message: 'Enter GitHub Repo Link',
        name: 'repo',
      },
      {
        type: 'input',
        message: 'Enter GitHub Live Page Link',
        name: 'page',
      },
      {
        type: 'input',
        message: 'Enter a description of the project',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Describe project usage',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Enter Installation Instructions',
        name: 'install',
      },
      {
        type: 'input',
        message: 'What languages were used for the project?',
        name: 'languages',
      },
      {
        type: 'input',
        message: 'Who is/are the contributor(s) to the project?',
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'What is the contact info if a user wants to contribue to the project?',
        name: 'contributorContact',
      },
      {
        type: 'input',
        message: 'Enter GitHub Username',
        name: 'githubUsername',
      },
      {
        type: 'input',
        message: 'Enter Email Address',
        name: 'email',
      },
      {
        type: 'rawlist',
        message: 'Select License Option for ReadMe Badge ',
        choices: ['MIT', 'BSD_3--Clause', 'BSD_2--Clause', 'Apache_2.0'],
        name: 'licenseBadge',
      },
      {
        type: 'rawlist',
        message: 'Select License Badge Color ',
        choices: ['lightblue', 'blue', 'orange', 'lightgrey', 'brightgreen', 'lightgreen', 'red'],
        name: 'badgeColor',
      },
      {
        type: 'input',
        message: 'Enter license content',
        name: 'licenseContent',
      },
    ])


    


  .then((answers) => {
    
    
    fs.writeFile('READMEGEN.md', generateReadMe (answers), (err) => {
        err ? console.error(err) : console.log('ReadMe Generated!')
      });

    });


