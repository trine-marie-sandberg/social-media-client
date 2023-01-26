import { url, email, goodboy } from "./testVariables.js";

describe("Authorization", () => {
  it("The user can log in with the login form with valid credentials", () => {
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
      cy.url().contain("?view=profile&name=Simba");
    });
  });
});
