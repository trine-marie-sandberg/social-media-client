const email = Cypress.env("email");
const password = Cypress.env("password");
const visitUrl = "https://trine-marie-sandberg.github.io/social-media-client/";

function mytest() {
  describe("no.wikipedia.org", () => {
    it("can login with walid username/password", () => {
      cy.get("form#loginForm")
        .should("be.visible")
        .within(() => {
          cy.get("input#loginEmail").type(email);
          cy.get("input#loginPassword").type(password);

          cy.intercept(
            "https://nf-api.onrender.com/api/v1/social/auth/login"
          ).as("loginSubmit");
          cy.root().submit();
          cy.wait("@loginSubmit").then((interception) => {
            expect(interception.response.statusCode).to.equal(200);
          });
        });
    });
  });
}

mytest();
