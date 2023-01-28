import { url, email, goodboy, token } from "./testVariables.js";

it("The user can log out with the logout button", () => {
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
  cy.wait(2000);
  cy.get(`button[type="button"][data-visible="loggedIn"]`)
    .contains("Logout")
    .click()
    .then(() => {
      expect(localStorage.getItem("token")).to.not.exist;
    });
});
