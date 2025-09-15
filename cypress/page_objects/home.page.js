class Homepage {
  get menuIcon() {
    return cy.get('[class="menu-icon"]');
  }
  get getcontactButton() {
    return cy.contains("Contact");
  }
}
export default new Homepage();
