///<reference types="Cypress"/>
///<reference types="@cypress/xpath"/>

describe('simple activity in cypress', () => {
    it.skip('checkbox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should("be.checked").and('have.value','option1')

        cy.get('#checkBoxOption1').uncheck().should("not.be.checked").and('have.value','option1');


        cy.get('input[type="checkbox"]').check(['option','option3'])

        cy.get('input[type="checkbox"]').uncheck(['option','option3'])

        cy.get('input[type="checkbox"]').check();
        
    });
    it.skip('dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('select').select('Option3').should('have.value','option3');
        
    });


    it.skip('dynamic dropdown/ automatic complete', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').clear();
        cy.get('#autocomplete').type('ind')
        cy.get('#ui-id-1').each(($el, index, $list)=>{
            if($el.text() == "India"){
                cy.wrap($el).click();
            }
            
        })
        // cy.get("#autocomplete").should('have.value',"India").click()
    });

    it.skip('radioBtn', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('input[value="radio1"]').check().should('be.checked')
    });



     it('visible not visible feature', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#displayed-text').should('be.visible')
        //if i click on an element which is called hidden
        cy.get('#hide-textbox').click();
        //this will not be visible
        cy.get('#displayed-text').should('not.be.visible')
        //if i click on an element which is called hidden
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible')
     });

});