// filler content for ReadMe

// ${answers.name}

const readmeContent = ( answers ) => {

    `
    ## ${answers.projectTitle}\n
    ${answers.projectTitle} is a web application that allows the user to ${answers.appUse}.
    The user can use this application by ${answers.howtouse}.
    This app can be accessed by ${answers.install}.

    ## Contributors
    ${answers.contributors}\n
    Want to be apart of this project? \n
    Contact: ${answers.contributorContact}\n
    \n
    ## Report a Bug\n
    Report a bug with the app by contacting: ${answers.bugContact}

    `
}

    module.exports = readmeContent;