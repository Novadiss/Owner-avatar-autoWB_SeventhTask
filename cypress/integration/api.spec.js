describe("API test", () => {
  const pet_id = 98765;
  const pet_name = "Rex";
  const pet_url = "https://petstore.swagger.io/v2/pet";

  it("Тест создания питомца", () => {
    cy.request('POST', pet_url, {
      id: pet_id,
      name: pet_name,
      photoUrls: []
    }).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).be.eql({
        id: pet_id,
        "tags": [],
        name: pet_name,
        photoUrls: []
      })
    })
  });

    it("Тест изменения питомца", () => {
      cy.request("PUT", pet_url, {
        id: pet_id,
        name: "Titan",
        photoUrls: [],
      }).then((response) => {
        expect(response.status).be.eql(200);
        expect(response.body).be.eql({
          id: pet_id,
          tags: [],
          name: "Titan",
          photoUrls: [],
        });
      });
    });

  it("Тест удаления питомца", () => {
    cy.request("POST", pet_url, {
      id: pet_id,
      name: pet_name,
      photoUrls: [],
    }).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).be.eql({
        id: pet_id,
        tags: [],
        name: pet_name,
        photoUrls: [],
      });
      cy.request("DELETE", pet_url + "/" + pet_id, {
      }).then((response) => {
      expect(response.status).be.eql(200);
      });
    });
  });   
});