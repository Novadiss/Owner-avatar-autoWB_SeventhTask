import tests from "../fixtures/seats"

describe('movie ticket reservation screen', () =>{
  beforeEach(() =>{
    cy.visit("/")
  });


  tests.forEach((test) => {
    it(test.name, () => {
      cy.get(test.movie_day).eq(4).click();
      cy.get(test.movie_name).first().contains("13:00").click();
      test.movie_seats.forEach((seat) => {
        cy.get(seat.seat).click();
      });
      cy.get(test.movie_accept).click();
      cy.contains("Вы выбрали билеты:").should("be.visible");
    })
  })
});
