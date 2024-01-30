describe("template spec", () => {
  it("add-anime-to-favorite-in-home", () => {
    cy.visit("/");
    cy.get("a[href^='/anime/']").first().click();
    cy.get("#btn-add-favorite").click();
    cy.location("pathname").should("include", "/anime");
  });

  it("add-anime-to-favorite-to-search", () => {
    cy.visit("/");
    cy.get("#input-query").type("sousou no frieren").parent("form").submit();
    cy.get("a[href^='/anime/']").first().click();
    cy.get("#btn-add-favorite").click();
    cy.location("pathname").should("include", "/anime");
  });

  it("add-manga-to-favorite-to-search", () => {
    cy.visit("/");
    cy.get("#input-query").type("sousou no frieren").parent("form").submit();
    cy.get("a[href^='/manga/']").first().click();
    cy.get("#btn-add-favorite").click();
    cy.location("pathname").should("include", "/manga");
  });

  it("add-manga-to-favorite", () => {
    cy.visit("/manga");
    cy.get("a[href^='/manga/']").first().click();
    cy.get("#btn-add-favorite").click();
    cy.location("pathname").should("include", "/manga");
  });
});
