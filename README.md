# ReadMeGen
ReadMeGen is a command line application that does the legwork for developers when it comes to generating a ReadMe file for their source projects on GitHub so developers can spend more time building their projects. 

ReadMeGen will help the user build a dynamic ReadMe file containing the following key points:
- What the App is used For
- How to use the app
- How to install the app
- How to Report Issues
- How to make Contributions

In order to utilize ReadMeGen, the user will interact with the generator via node.js by entering the syntax node index.js on an integrated terminal.


## UI & Video Walkthrough of Application
Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.


Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.

Walkthrough Video: 27%
A walkthrough video that demonstrates the functionality of the README generator must be submitted, and a link to the video should be included in your README file.

The walkthrough video must demonstrate how a user would invoke the application from the command line.

The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.

## User Story
```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```


## Acceptance Criteria
``` md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```



## Languages Used
HTML, JavaScript, Node.JS, Innquirer npm package




Make sure that your repo includes a package.json with the required dependencies. You can create one by running npm init when you first set up the project, before installing any dependencies.


Grading Requirements
This homework is graded based on the following criteria:

Deliverables: 20%
A sample README generated using the application must be submitted.

Your GitHub repository containing your application code.


Technical Acceptance Criteria: 40%
Satisfies all of the above acceptance criteria plus the following:

Uses the Inquirer package.
Repository Quality: 13%
Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a high-quality README with description and a link to walkthrough video.

Review
You are required to submit the following for review:

A walkthrough video demonstrating the functionality of the application.

A sample README.md file for a project repository generated using your application

The URL of the GitHub repository, with a unique name and a README describing the project


## License

© 2022 Lo Selby [Lone Wolf Co]
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
