var inquirer = require('inquirer');
const fs = require('fs');
const readmeContent = require (readmetext.js);

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'projectTitle',
      },
      {
        type: 'input',
        message: 'Fill in the blank: The App Allows the User to _____.',
        name: 'appUse',
      },
      {
        type: 'input',
        message: 'Fill in the blank: The app can be accessed by ______.',
        name: 'install',
      },
      {
        type: 'input',
        message: 'Who is/are the contributors to the project?',
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'What is the contact info if a user wants to contribue to the project?',
        name: 'contributorContact',
      },
      {
        type: 'input',
        message: 'What is the contact info for a user to report a bug?',
        name: 'bugContact',
      },
    ])  



  .then((answers) => {

    const readMeTemplate = readmeContent (answers);
    
    
    fs.appendFile('READMEGEN.md', readMeTemplate (answers), (err) =>
        err ? console.error(err) : console.log('Response logged')

  )});
