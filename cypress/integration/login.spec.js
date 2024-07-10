it("[Вход в админку]", () => {
    cy.visit("/admin");
    cy.login("qamid@qamid.ru", "qamid");
});

it("неправильный логин", () => {
  cy.visit("/admin");
  cy.login("asdsa@asdasd.ru", "qamid");
    cy.contains("Ошибка авторизации!").should("be.visible");
});

it("неправильный пароль", () => {
  cy.visit("/admin");
  cy.login("qamid@qamid.ru", "321");
  cy.contains("Ошибка авторизации!").should("be.visible");
});
