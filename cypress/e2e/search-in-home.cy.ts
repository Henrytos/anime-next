describe("Search-in-home", () => {
  it("seacrh-anime-in-home", () => {
    cy.visit("/");
    cy.contains("sim").click();
    cy.get("input[type^='email']").click();
  });

  it("seacrh-anime-in-url", () => {
    cy.visit("/query?q=");

    cy.on("uncaught:exception", () => {
      return false;
    });

    cy.location("pathname").should("equal", "/");
  });
});
