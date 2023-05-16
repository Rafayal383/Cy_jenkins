///  <reference types="Cypress" />
 ///  <reference types="@cypress/xpath" />

// import { it } from "mocha";

 
describe('Promise and then', () => {
    // it.skip('First application example on promise and then', () => {
    //     cy.visit('https://automationteststore.com/');
    //     cy.get('.productname').contains('Skinsheen Bronzer Stick').then((itemheader)=>{
    //         cy.log(itemheader.text())
    //     })
    // });

    // it.skip('secoound ', () => {
    //     cy.visit('https://automationteststore.com/');
    //     cy.get('a[href$=contact]').click((linkText)=>{
    //         cy.log(linkText.text());
    //     });
        
        
    // });

    it('third example', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
       cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
       cy.get('.oxd-button').click();
       cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
       cy.get(':nth-child(4) > .oxd-userdropdown-link').then((lastLink)=>{
            const link = lastLink.text();
            cy.log("Link name is the " + link);
            cy.wrap(lastLink).click();
        })
    });
});