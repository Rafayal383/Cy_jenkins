///  <reference types="Cypress" />
 ///  <reference types="@cypress/xpath" />


 describe('Alerts', () => {
    // it('ex1', () => {
    //     cy.visit('https://demoqa.com/alerts');
    //     cy.get('#alertbtn').click();
    //     cy.on('window:alert',(message)=>{
    //         expect(message).to.equal("Hello , share  this practice page and share your knowledge")
    //         return true;
    //     })
    // });

    it('ex2', () => {
        cy.visit('https://demoqa.com/alerts');
        cy.get('#confirmButton').click();
        cy.on('window:confirm',(message)=>{
            // expect(message).to.equal("You selected Cancel")
            return false;
        })
        // cy.get('#confirmResult').
    });
});