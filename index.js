const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ Titlequestion1, Descriptionquestion2, Installationquestion3, Usagequestion4, Licensequestion5, Contributingquestion6, Testsquestion7, Questionscontactquestion8, Emailquestion9, AdditionalResourcesextraquestion10 }) =>
  ` 
        ## Title
        ${Titlequestion1}

        ## Description 
        ${Descriptionquestion2}
        
        ## Contents table
        1. [Installation](#Installation)
        2. [Usage](#Usage)
        3. [License](#License)
        4. [Contributing](#Contributing)
        5. [Tests](#Tests)
        6. [Questions](#Questions)
        
        ## Installation
        ${Installationquestion3}

        ## Usage
        ${Usagequestion4}

        ## License
        ${Licensequestion5}

        ## Contributing
        ${Contributingquestion6}

        ## Tests
        ${Testsquestion7}

        ## Questions
        ${Questionscontactquestion8}
        ${Emailquestion9}

        ## Additional Resources
        ${AdditionalResourcesextraquestion10}
`;

inquirer
  .prompt([
    {
      type:"input",
      name: "Titlequestion1",
      message: "What is the title (the name) of the project?",
  },{
      type:"input",
      name: "Descriptionquestion2",
      message: "Please describe your project with atleast 1 short sentence.",
  },{
      type:"input",
      name: "Installationquestion3",
      message: "What is needed to install?",
  },{
      type:"input",
      name: "Usagequestion4",
      message: "What is the way this is used?",
  },{
      type:"list",
      name: "Licensequestion5",
      message: "What is the license for this project? (arrow up/down, hit enter to select)",
      choices: [
          "MIT [![MIT license](https://img.shields.io/badge/license-MIT-blue)](https://mit-license.org/)", 
          "APACHE2.0 [![Apache2.0 license](https://img.shields.io/badge/license-Apache2.0-blue)](https://www.apache.org/licenses/LICENSE-2.0)", 
          "n/a"],
  },{
      type:"input",
      name: "Contributingquestion6",
      message: "Please list anyone who has contributed to this project here.",
  },{
      type:"input",
      name: "Testsquestion7",
      message: "Please provide how a user would test this project.",
  },{
      type:"input",
      name: "Questionscontactquestion8",
      message: "What is your Github repo username?",
  },{
      type: 'input',
      name: 'Emailquestion9',
      message: 'What is your full Email? address?',
  },{
      type:"input",
      name: "AdditionalResourcesextraquestion10",
      message: "Please cite any references or resouces used to create this project.",
  }
  ])
  .then((answers) => {
    const readMeContent = generateReadme(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
