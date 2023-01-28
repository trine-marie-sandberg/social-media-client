import { url, email, goodboy } from "./testVariables.js";

describe("Authorization", () => {
  it("The user cannot submit the login form with invalid credentials and is shown a message", () => {
    cy.visit(url);
    cy.get("#registerForm button[data-auth='login']")
      .contains("Login")
      .should("be.visible")
      .wait(1000)
      .click();
    cy.wait(1000);

    cy.get("input#loginEmail").type("invalid@cats.com");
    cy.get("input#loginPassword").type(goodboy);
    cy.get(`button[type="submit"]`).contains("Login").click().wait(1000);
    cy.on("window:alert", (txt) => {
      expect(txt).to.eq(
        "Either your username was not found or your password is incorrect"
      );
    });
    expect(() => {
      const checkUrl = cy.url();
      cy.get(checkUrl).not(contain("?view=profile&name=Simba"));
      cy.url().not().Contain("?view=profile&name=Simba");
    });
  });
});
