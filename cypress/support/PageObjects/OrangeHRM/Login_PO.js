class Homepage_Po {
    visitHomePage() {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
    }
    Login() {
      cy.get('input[name="username"][placeholder="Username"]').type("Admin");
        cy.get('input[name="password"][placeholder="Password"]').type("admin123");
        cy.get(".oxd-button").contains(" Login ").click();
    }
  }export default Homepage_Po;