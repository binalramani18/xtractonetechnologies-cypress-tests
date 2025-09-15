import { faker, Faker } from "@faker-js/faker";

const userData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.number(),
  companyName: faker.company.name(),
  jobTitle: faker.person.jobTitle(),
  Country: faker.location.country(),
  State: faker.location.state(),
  Message: faker.lorem.sentence(),
};
describe("contact form submission on xtract one technologies website", () => {
  it("Negative Scenario: should show required field errors without submitting real data", () => {
    cy.visit("https://xtractone.com/");

    cy.get('[class="menu-icon"]').click();
    cy.contains("Contact").click();
    cy.get('[name="firstname"]').type(userData.firstName).clear();
    cy.get('[name="lastname"]').type(userData.lastName).clear();
    cy.get('[name="email"]').type(userData.email).clear();
    cy.get('[name="phone"]').type(userData.phoneNumber).clear();

    cy.get('[name="company"]').type(userData.companyName).clear();
    cy.get('[type="submit"]').click();

    //validation
    cy.contains("Please complete all required fields.").should("be.visible");
  });
});
