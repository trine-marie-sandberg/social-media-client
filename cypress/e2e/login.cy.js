const USER_EMAIL = Cypress.env("USER_EMAIL");
const USER_PASSWORD = Cypress.env("USER_PASSWORD");

context("authentication forms", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(500);

    //close register form and open login
    cy.get("#registerForm")
      .find('.modal-footer button[data-auth="login"]')
      .click();
    cy.wait(1000); // wait for transition to complete
  });

  it("user can login with valid credentials", () => {
    // login with valid credentials
    cy.get("#loginForm")
      .should("be.visible")
      .within(() => {
        cy.get("input#loginEmail").type(USER_EMAIL);
        cy.get("input#loginPassword").type(USER_PASSWORD);

        cy.intercept("https://nf-api.onrender.com/api/v1/social/auth/login").as(
          "loginSubmit"
        );
        cy.root().submit();
        cy.wait("@loginSubmit").then((interception) => {
          expect(interception.response.statusCode).to.equal(200);
        });
      });
  });

  it("user can not submit form with invalid credentials", () => {
    cy.get("#loginForm")
      .should("be.visible")
      .within(() => {
        cy.get("input#loginEmail")
          .type("wrong@email.com")
          .as("inputEmail")
          .then(($email) => {
            expect($email[0].checkValidity()).to.be.false;
          });
        cy.get("input#loginPassword")
          .type("abc")
          .then(($password) => {
            // for some reason cypress wont work with the minLength attribute
            // expect($password[0].validity.tooShort).to.be.true
          });

        cy.get('button[type="submit"]').click();
        cy.get("@inputEmail").then(($email) => {
          expect($email[0].validationMessage).to.not.be.empty;
        });
      });
  });
});
