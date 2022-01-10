// filler content for ReadMe


const generateReadMe = (answers) => {
    return `
# ${answers.projectTitle}\n
[![License: ${answers.licenseBadge}](https://img.shields.io/badge/License-${answers.licenseBadge}-${answers.badgeColor}.svg)](https://opensource.org/licenses)

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Installation Instructions](#install)
- [Contributors](#contributors)
- [Report a Bug](#bug)
- [Questions?](#questions)
- [License](#license)

## [Description](#description)
<a name="description"></a>
${answers.description}.


## [Usage](#usage)
<a name="usage"></a>
The user can use this application by ${answers.usage}.

## [Installation Instructions](#install)
<a name="install"></a>
${answers.projectTitle} can be accessed by: 
${answers.install}

## [Contributors](#contributors)
<a name="contributors"></a>
${answers.contributors}
- Want to be apart of this project?
- Contact: ${answers.contributorContact}

## [Report a Bug](#bug)
<a name="bug"></a>
Report a bug with the app by contacting: ${answers.bugContact}

## [Questions?](#questions)
<a name="questions"></a>
${answers.questions}

## [License](#license)
<a name="license"></a>
${answers.licenseContent}
    
    `
  }

    module.exports = generateReadMe;