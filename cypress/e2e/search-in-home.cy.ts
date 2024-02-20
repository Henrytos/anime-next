describe("Search-in-home", () => {
  it("seacrh-anime-in-home", () => {
    cy.visit("/");

    cy.searchByQuery("sousou no frieren");
  });

  it("seacrh-anime-in-url", () => {
    cy.visit("/query?q=");

    cy.on("uncaught:exception", () => {
      return false;
    });

    cy.location("pathname").should("equal", "/");
  });
});
