import { url, email, goodboy, token } from "./testVariables.js";

it("The user can log out with the logout button", () => {
  cy.visit(url);
  cy.get("#registerModal button")
    .contains("Login")
    .should("be.visible")
    .click();
  cy.get(`input#loginEmail[name="email"]`).type(email);
  cy.get(`input#loginPassword[name="password"]`).type(goodboy);
  cy.get(`button[type="submit"]`).contains("Login").click();
  cy.wait(2000);
  cy.get(`button[type="button"][data-visible="loggedIn"]`)
    .contains("Logout")
    .click()
    .then(() => {
      expect(localStorage.getItem("token")).to.not.exist;
    });
});
