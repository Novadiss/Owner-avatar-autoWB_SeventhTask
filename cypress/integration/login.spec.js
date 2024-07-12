it("Valid login", () => {
    cy.visit("/admin");
    cy.get(".page-header__title").should("be.visible");
    cy.login("qamid@qamid.ru", "qamid");
});

it("Invalid login", () => {
  cy.visit("/admin");
  cy.get(".page-header__title").should("be.visible");
  cy.login("asdsa@asdasd.ru", "qamid");
    cy.contains("Ошибка авторизации!").should("be.visible");
});

it("Invalid password", () => {
  cy.visit("/admin");
  cy.get(".page-header__title").should("be.visible");
  cy.login("qamid@qamid.ru", "321");
  cy.contains("Ошибка авторизации!").should("be.visible");
});
