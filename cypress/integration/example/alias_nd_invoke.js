describe('alias and invoke', () => {
    it('example1', () => {
        cy.visit('https://automationteststore.com/');
        
        cy.get("a[href*='category&path=']").contains("Hair Care").click()
       cy.get('.prdocutname').eq(0).invoke("text").as("ItemPro")
       cy.get("@ItemPro").its('length').should("be.gt",5)
       cy.get("@ItemPro").should("include","Seaweed Conditioner")
    });

    it('example 2', () => {
        cy.visit('https://automationteststore.com/');
        cy.get(".thumbnail").as('allproducts')
        cy.get("@allproducts").should('have.length',16)
        cy.get('@allproducts').find('.productcart').invoke('attr','title').should('include','Add to Cart');
    });
});