it("Should show correct page name", () => {
  cy.visit("/");
  cy.contains("Идём").should("be.visible");
});

it("Should show correct number of days", () => {
  cy.visit("/");
  cy.get(".page-nav__day").should("have.length", 7);
});

it("Should show correct number of films", () => {
  cy.visit("/");
  cy.get(".movie").should("have.length", 3);
});