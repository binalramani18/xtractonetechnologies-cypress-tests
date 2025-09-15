import homePage from "../../page_objects/home.page";

describe("exploratory testing of xtract one technologies", () => {
  beforeEach(() => {
    cy.visit("https://xtractone.com/");
  });
  it("should navigate to homepage", () => {
    cy.get(
      '[data-src="https://xtractone.com/wp-content/uploads/2024/01/Xtract-One.png"]'
    ).should("be.visible");
    cy.get('[class="footer-top"]').should("be.visible");
    cy.get("footer").contains("Privacy").should("be.visible");
  });

  it("should click on menu icon and show menu list", () => {
    homePage.menuIcon.click();
    homePage.getcontactButton.click();
    cy.url().should("include", "/contact/");
  });
});
