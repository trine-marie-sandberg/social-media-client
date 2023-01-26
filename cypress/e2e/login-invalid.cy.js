import { url, email, goodboy } from "./testVariables.js";

describe("Authorization", () => {
  it("The user cannot submit the login form with invalid credentials and is shown a message", () => {
    cy.visit(url);
    cy.get("#loginModal button")
      .contains("Login")
      .should("be.visible")
      .click()
      .wait(1000);
    cy.get(`input#loginEmail[name="email"]`).type(email);
    cy.get(`input#loginPassword[name="password"]`).type(goodboy);
    cy.get(`button[type="submit"]`).contains("Login").click();
    expect(() => {
      const checkUrl = cy.url();
      cy.get(checkUrl).not(cy.contain("?view=profile&name=Simba"));
      cy.url().not().Contain("?view=profile&name=Simba");
    });
  });
});
