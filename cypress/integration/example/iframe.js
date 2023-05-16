

///<reference types="Cypress"/>
///<reference types="@cypress/xpath"/>
///<reference types="cypress-iframe"/>

describe('iframe', () => {
    it('iframe', () => {
        cy .visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find('a[href="consulting"]').eq(0).click()
    });
});