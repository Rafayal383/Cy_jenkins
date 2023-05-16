///<reference types="Cypress"/>

describe('itrators', () => {
    before(()=>{
        cy.fixture('product').then((data)=>{
            // this.data=data
            globalThis.data = data
        })
    })



    it('first', () => {
        cy.visit('https://automationteststore.com/');
        globalThis.data.product.forEach((N)=>{
            cy.selectProduct(N);
        })
    });


});