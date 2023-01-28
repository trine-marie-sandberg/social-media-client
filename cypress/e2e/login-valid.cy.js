import { url, email, goodboy } from "./testVariables.js";

describe("Authorization", () => {
  it("The user can log in with the login form with valid credentials", () => {
    cy.visit(url);
    cy.get("#registerForm button[data-auth='login']")
      .contains("Login")
      .should("be.visible")
      .wait(1000)
      .click();
    cy.wait(1000);

    cy.get("input#loginEmail").type(email);
    cy.get("input#loginPassword").type(goodboy);
    cy.get(`button[type="submit"]`).contains("Login").click();
    expect(() => {
      cy.url().contain("?view=profile&name=Simba");
    });
  });
});
