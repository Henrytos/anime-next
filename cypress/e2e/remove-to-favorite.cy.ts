describe("testing remove to favorite", () => {
  it("remove-to-favorite-in-home", () => {
    cy.visit("/");
    cy.get("a[href^='/anime/']").first().click();
    cy.addAnimeToFavorite();

    cy.get("#btn-menu").click();
    cy.get("a[href^='/favorites']").click();
    cy.get("#btn-remove-favorite").first().click();
  });
});
