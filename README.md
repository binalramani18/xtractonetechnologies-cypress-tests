# Xtract One Technologies - Cypress Automation Project

 Project Overview
This project automates functional and exploratory testing of the Xtract One Technologies website using Cypress. The tests cover the homepage, navigation menu, and contact form, ensuring the website works smoothly and delivers a good user experience.

 Features Tested
- Homepage Validation: Verified elements like the logo, footer, and header.
- Navigation Menu: Ensured the menu opens on click and navigates to the contact page.
-Contact Form Testing:
  - Automated form submission using realistic data generated with Faker.js.
  - Tested negative scenarios by leaving required fields empty and validated error messages.



 Observations / Findings
- During testing, I noticed that the First Name, Last Name, Country, and State fields accept special characters and numbers.
- This could allow invalid data to enter the system in a real-world scenario.
- Highlighted the importance of proper data validation to maintain data quality.



 Tools & Technologies
- Cypress: Automation and exploratory testing.
- Faker.js: Generating realistic test data.
- JavaScript / Node.js: Writing test scripts.



 Run & Learn
- Clone the repository:
```bash
git clone <repository-url>
Install dependencies:

bash
Copy code
npm install
Run Cypress tests:

bash
Copy code
# GUI mode
npx cypress open

# Headless mode
npx cypress run


