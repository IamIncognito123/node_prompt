// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
if(data.license === 'Apache 2.0'){
  data.license = {
    badge: 'apache',
    link: 'apache link'
  }
}else if(data.license === 'Boost'){
  data.license = {
    badge: '',
    link: ''
  }
}else if(data.license === 'Eclipse'){
  data.license = {
    badge: '',
    link: ''
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

