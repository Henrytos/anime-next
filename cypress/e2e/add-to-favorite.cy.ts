describe("template spec", () => {
  it("add-anime-to-favorite-in-home", () => {
    cy.visit("/");
    cy.get("a[href^='/anime/']").first().click();
    cy.addAnimeToFavorite();
    cy.location("pathname").should("include", "/anime");
  });

  it("add-anime-to-favorite-to-search", () => {
    cy.visit("/");

    cy.searchByQuery("sousou no friren");

    cy.get("a[href^='/anime/']").first().click();

    cy.addAnimeToFavorite();

    cy.location("pathname").should("include", "/anime");
  });

  it("add-manga-to-favorite-to-search", () => {
    cy.visit("/");

    cy.searchByQuery("sousou no friren");

    cy.get("a[href^='/manga/']").first().click();

    cy.addAnimeToFavorite();

    cy.location("pathname").should("include", "/manga");
  });

  it("add-manga-to-favorite", () => {
    cy.visit("/manga");

    cy.get("a[href^='/manga/']").first().click();

    cy.addAnimeToFavorite();

    cy.location("pathname").should("include", "/manga");
  });
});
