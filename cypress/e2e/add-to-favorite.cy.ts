describe("template spec", () => {
  it("add-to-favorite-in-home", () => {
    cy.visit("localhost:3000");
    cy.get("a[href^='/anime/']").first().click();
    cy.get("#btn-add-favorite").click();
    cy.location("pathname").should("include", "/anime");
  });

  it("add-to-favorite-to-search", () => {
    cy.visit("localhost:3000");
    cy.get("#input-query").type("sousou no frieren");
    cy.get("#btn-search").click();
    cy.get("#poster-link").first().click();
    cy.get("#btn-add-favorite").click();
    cy.location("pathname").should("include", "/anime");
  });

  it("add-to-favorite-in-manga", () => {
    cy.visit("localhost:3000/manga");
    cy.get("a[href^='/manga/']").first().click();
    cy.get("#btn-add-favorite").click();
    cy.location("pathname").should("include", "/manga");
  });
});
