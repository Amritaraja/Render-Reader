// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license != "No license"){
  return `
  ![badge](https://img.shields.io/badge/license-${license}-brightgreen)
  `
} else {
  return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "No license") {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
    } else {
      return ' ';
    }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No license") {
    return "";
  } else {
     return `
  ## Licensing 
  The application is covered under ${license} license.
  ${renderLicenseLink(license)}`
  }
};

// TODO: Create a function that returns the license in the Tbale of Contents
// If there is no license, return an empty string
function renderLicenseTableOfConents(license) {
  if (license === "No license") {
    return "";
  } else {
     return `
  - [License](#license)`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  - ${data.why}
  - ${data.problem}
  - ${data.learn}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits) ${renderLicenseTableOfConents(data.license)}
  - [Tests](#tests)
  - [Questions](#questions)
  - [Contribute](#contribute)
  

  ## Installation
  To install this application, please follow the steps below:
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ${data.screenshot}

  ## Credits
  ${data.credit}

  ${renderLicenseSection(data.license)}
  
  ## Tests
  ${data.test}
  
  ## Questions 
  If you have any questions, you can reach me at ${data.email} and follow my work at [${data.github}](https://github.com/${data.github}/)
`;
}

module.exports = generateMarkdown;
