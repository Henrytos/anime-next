describe("template spec", () => {
  it("passes", () => {
    cy.visit("localhost:3000");
    cy.get("a[href^='/anime/']").first().click();
    cy.get("#btn-add-favorite").click();
    cy.location("pathname").should("include", "/anime");
  });
});
