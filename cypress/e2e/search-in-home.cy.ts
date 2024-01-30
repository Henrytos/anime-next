describe("Search-in-home", () => {
  it("seacrh-anime-in-home", () => {
    cy.visit("/");

    cy.searchByQuery("sousou no frieren");

    cy.location("pathname").should("include", "/query");
  });

  it("seacrh-anime-in-url", () => {
    cy.visit("/query?q=");

    cy.on("uncaught:exception", () => {
      return false;
    });

    cy.location("pathname").should("equal", "/");
  });
});
