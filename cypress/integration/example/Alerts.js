///<reference types="Cypress"/>
///<reference types="@cypress/xpath"/>

describe('Alerts', () => {
    it('ex1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click();
        cy.on('window:alert',(message)=>{
            expect(message).to.equal("Hello , share  this practice page and share your knowledge")
            return true;
        })
    });

    it('ex2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#confirmbtn').click();
        cy.on('window:alert',(message)=>{
            expect(message).to.equal("Hello , are you want to confirm")
            return true;
        })
    });
});