// describe.skip('Cypress api testing', () => {
//     it.skip('Q1', () => {
//         // cy.visit("https://www.makemytrip.com/");
//         cy.visit('https://www.makemytrip.com/')
//         // cy.visit("https://www.google.com/")

//     });

//     it.skip('Q2', () => {
//         cy.visit("https://the-internet.herokuapp.com/login");
//         cy.wait(1000);
//         cy.get("#username").type("tomsmith")
//         cy.wait(1000);
//         cy.get("#password").type("SuperSecretPassword!")
//         cy.wait(1000);
//         cy.get("button").click();
//     });

//     it.skip('Q3', () => {
//         cy.visit("https://ksrtc.in/oprs-web/");
//         cy.wait(1000);
//         cy.get("#txtJourneyDate").click();
//         cy.get('span[class="ui-icon ui-icon-circle-triangle-e"]').click();
//         cy.xpath('(//a[@class="ui-state-default"])[6]').click();
//     });

//     it.skip('Q4', () => {
//         cy.visit("https://demoqa.com/buttons");
//         cy.get("#doubleClickBtn").dblclick();
//         cy.wait(2000);
//         cy.get("#doubleClickMessage").should('have.text',"You have done a double click")
//     });

//     it.skip('Q5', () => {
//         cy.visit("https://demoqa.com/checkbox");
//         cy.get("#tree-node-home").check({force: true}).should("be.checked");
//         cy.xpath('(//span[@class="text-success"])[1]').should('have.text',"home");
//     });
// });

describe('Q4', () => {
    it('Q1', () => {
        // cy.visit("https://www.makemytrip.com/");
        cy.visit("https://www.google.com/")
    });
});