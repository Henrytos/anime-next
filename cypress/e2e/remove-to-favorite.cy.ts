describe("testing remove to favorite", () => {
  it("remove-to-favorite-in-home", () => {
    cy.visit("localhost:3000");
    cy.get("a[href^='/anime/']").first().click();
    cy.get("#btn-add-favorite").click();

    cy.get("#btn-menu").click();
    cy.get("a[href^='/favorites']").click();
    cy.get("#btn-remove-favorite").first().click();
  });
});
