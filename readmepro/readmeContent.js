// ReadMe Template

const generateReadMe = (answers) => {
    return `
# ${answers.projectTitle}\n
[![License: ${answers.licenseBadge}](https://img.shields.io/badge/License-${answers.licenseBadge}-${answers.badgeColor}.svg)](https://opensource.org/licenses)

[GitHub Repo](${answers.repo}) | [GitHub Page](${answers.page})

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Installation Instructions](#install)
- [Languages Used](#languages)
- [Contributors](#contributors)
- [Report a Bug / Questions?](#bug)
- [Questions?](#questions)
- [License](#license)

---

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

## [Languages Used](#languages)
<a name="languages"></a>
${answers.languages}

## [Contributors](#contributors)
<a name="contributors"></a>
${answers.contributors}

Want to be apart of this project?
- Contact: ${answers.contributorContact}


## [Report a Bug / Questions?](#bug)
<a name="bug"></a>
Report a bug with the app by contacting the contributors on the repo:
- [GitHub Repo](${answers.repo}) 
- [GitHub User: ${answers.githubUsername}](https://github.com/${answers.githubUsername})
- ${answers.email}


## [License](#license)
<a name="license"></a>
${answers.licenseContent}
    
    `
  }

  // export data so it can be accessed by another js file
    module.exports = generateReadMe;