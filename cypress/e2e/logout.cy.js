const USER_PROFILE = {
  name: Cypress.env("USER_NAME"),
  email: Cypress.env("USER_EMAIL"),
  banner:
    "https://static.eproshopping.fr/media/513ba4baa250ded4547261369def6099623d543c/page/66b76854c1a59fe67de42860ff524fbb4d8fb9bc-5by2.jpeg",
  avatar:
    "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_80,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/traversecity/Crystal-Lake-Alpaca-Farm-Boutique-c9afa0185056a34_c9afa176-5056-a348-3a0501841f32b030.jpg",
};
const USER_TOKEN = Cypress.env("USER_TOKEN");

describe("Logging out", () => {
  it("user can succesfully log out, clearing sensitive data from storage", () => {
    localStorage.setItem("token", JSON.stringify(USER_TOKEN));
    localStorage.setItem("profile", JSON.stringify(USER_PROFILE));
    cy.wait(1000);

    cy.visit("/").then(() => {
      expect(localStorage.getItem("token")).to.exist;
      expect(localStorage.getItem("profile")).to.exist;
    });

    // stop page from requesting Noroff API
    cy.intercept(
      "GET",
      "https://nf-api.onrender.com/api/v1/social/posts?limit=20&offset=0&_reactions=true&_author=true&_comments=true",
      (req) => {
        req.destroy();
      }
    );

    // handle errors if request intercept doesn't work
    cy.on("uncaught:exception", (err) => {
      if (err.message.includes("Internal Server Error")) return false;
    });

    cy.get('[data-auth="logout"]')
      .click()
      .then(() => {
        expect(localStorage.getItem("token")).to.not.exist;
        expect(localStorage.getItem("profile")).to.not.exist;
      });
  });
});
