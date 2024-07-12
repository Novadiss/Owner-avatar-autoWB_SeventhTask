describe("API test", () => {

  const pet_id = Math.floor(Math.random() * 10000);
  const pet_name = "Rex";
  const pet_url = "https://petstore.swagger.io/v2/pet";

  it("Create pet", () => {
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

    it("Modify pet", () => {
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

  it("Delete pet", () => {
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