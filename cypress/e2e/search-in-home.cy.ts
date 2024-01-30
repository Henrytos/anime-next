describe("Search-in-home", () => {
  it("seacrh-anime-in-home", () => {
    cy.visit("/");
    cy.get("#input-query").type("sousou no frieren").parent("form").submit();
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
