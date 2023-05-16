///<reference types="Cypress"/>

describe('itrators', () => {
    it.skip('first', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('a[href*="product/category&path="]').contains("Hair Care").click();
        cy.get('.prdocutname').each(($el,index,$list)=>{
            cy.log(`index is ${index} element Names ${$el}   ${$el.text()}`);
        })
    });

    it('tuesday class', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[type="password"]').type("admin123");
        cy.get('button[type="submit"]').click();
        cy.get('.oxd-main-menu').contains("Admin").click();
        cy.get('input[placeholder="Type for hints..."]').type("P");

        // 

        cy.get('.oxd-autocomplete-dropdown').find('.oxd-autocomplete-option').each(($el, index, $list)=>{
            
        })
      


    });

});