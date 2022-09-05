// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
if(data.license === 'Apache 2.0'){
  data.license = {
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    link: 'The application is covered under the Apache 2.0 license.'
  }
}else if(data.license === 'Boost'){
  data.license = {
    badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    link: 'The application is covered under the Boost Software License 1.0.'
  }
}else if(data.license === 'Eclipse'){
  data.license = {
    badge: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    link: 'The application is covered under the Eclipse Public License 1.0.'
  }
}else if(license === null){
  return console.log('no license')
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${data.license.badge}

## Description

${data.description}

## Table of Contents

 1. [Installation](#Installation)
 2. [Usage](#Usage)
 3. [License](#License)
 4. [Contributing](#Contributing)
 5. [Tests](#Tests)
 6. [Questions](#Questions)

## <a name='Installation'></a>Installation

${data.installation}

## <a name='Usage'></a>Usage 

${data.usage}

## <a name='License'></a>License 
${data.license.link}

## <a name='Contributing'></a>Contributing  

${data.contribution}

## <a name='Tests'></a>Tests

${data.test}

##  <a name='Questions'></a>Questions

GitHub Username: ${data.name}
Profile: https://github.com/${data.name}
You can reach me at ${data.email} with additional questions.

`;
}

module.exports = {generateMarkdown, renderLicenseBadge}

