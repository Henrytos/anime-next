declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable<void>;
    addAnimeToFavorite(): Chainable<void>;
  }
}
Cypress.Commands.add("searchByQuery", (query: string) => {
  cy.visit("/");
  cy.get("input[name=q]").type(query).parent("form").submit();
});

Cypress.Commands.add("addAnimeToFavorite", () => {
  cy.get("#btn-add-favorite").click();
});
