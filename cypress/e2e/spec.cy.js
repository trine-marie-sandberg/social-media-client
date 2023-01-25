const site = "https://example.cypress.io";

describe("template spec", () => {
  it("passes", () => {
    cy.visit(site);
  });
});
