///<reference types="Cypress"/>
///<reference types="@cypress/xpath"/>


describe('navigation', () => {


    it.skip('1st ex', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[type="password"]').type("admin123");
        cy.get('button[type="submit"]').click();

        cy.get('.oxd-main-menu').contains("Admin").click();
        cy.url().should('include','admin')

        cy.go('back')
        cy.url().should('include','dashboard')
        cy.go('forward')

        cy.url().should('include','admin')
        cy.reload();

        cy.url().should('include','admin');
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type("Virat Kohli")

        cy.reload(true);
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').should('not.be.value','Virat Kohli')
        // cy.get('input[placeholder=""]')



    });

    it.skip('multiple tabs', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').invoke('removeAttr','blank').click();
    });
   
});