/// <reference types="Cypress"/>
/// <reference types="@cypress/xpath"/>

describe('GreenKart Functionality', () => {
    it('GreenKart Application', () => {
        cy.visit(
            "https://rahulshettyacademy.com/seleniumPractise/#/"
        );
        // cy.get('.search-keyword')
        cy.get('input[type="search"]').type('ca')
        //if i want to wait
        cy.wait(3000);

        //implicit wait
        //-----.click({timeout:3000});
        //explicit wait
        // Cypress.config('defaltCommandTimeout', 5000);

        cy.get('.product:visible').should('have.length', 4);
       //getting thirdindex element and adding to cart
        // cy.get('.products').find('.product').eq(2).contains("ADD TO CART").click();
       
        //adding another element with name specifically
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const productname = $el.find('h4.product-name').text();
            if (productname.includes('Cashews')) {
                //wrap to make it a cyprees command
               cy.wrap($el.find('button')).click();
            }
            if (productname.includes('Carrot')) {
                //wrap to make it a cyprees command
               cy.wrap($el.find('button')).click();
            }
        })
       
        //i want to apply assertion on LOGO
        cy.get('.brand').should('have.text', 'GREENKART');
   
        cy.title().should('include', 'GreenKart');
   
        //clcik on cart icon
        cy.get('.cart-icon').click();

        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();

        //checkbox
        cy.get('.chkAgree').check().should('be.checked')
        cy.contains('Proceed').click();


    });
});