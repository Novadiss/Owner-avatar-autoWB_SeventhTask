import tests from "../fixtures/seats"

describe('movie ticket reservation screen', () =>{
  beforeEach(() =>{
    cy.visit("/")
  });


  tests.forEach((test) => {
    it(test.name, () => {
      const value1 = "ЗалЗал90";
      const value2 = "13:00";
      const movie = test.movie;
      const movie1 = test.movie1;
      const movie2 = test.movie2;
      const movie3 = test.movie3;
      cy.get(test.movie_day).eq(4).click();
      // cy.get(test.movie).contains(value1).should('be.visible').get(test.movie).contains(value2).click();
      cy.get(movie1).then(($movie)=> {
        expect($movie).to.contain(value1);
        expect($movie).to.contain(value2);
        cy.get(movie1).contains(value2).click();
      })
      // cy.get(test.movie_hall).first().contains("13:00").click();
      test.movie_seats.forEach((seat) => {
        cy.get(seat.seat).click();
      });
      cy.get(test.movie_accept).click();
      cy.contains("Вы выбрали билеты:").should("be.visible");
    })
  })
});
