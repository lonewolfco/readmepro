var inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require ('./generateReadMe');


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


    // const readmeContent = 
//     `
// # ${answers.projectTitle}\n

// ## Description
// ${answers.projectTitle} is a web application that allows the user to ${answers.appUse}.
// The user can use this application by ${answers.howtouse}.
// This app can be accessed by ${answers.install}.

// ## Contributors
// ${answers.contributors}\n
// Want to be apart of this project? \n
// Contact: ${answers.contributorContact}\n
// \n
// ## Report a Bug\n
// Report a bug with the app by contacting: ${answers.bugContact}

// `
  
    
    
    fs.writeFile('READMEGEN.md', generateReadMe (answers), (err) => {
        err ? console.error(err) : console.log('ReadMe Generated!')
      });

    });


