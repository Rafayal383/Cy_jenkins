describe('VARIABLES', () => {
    it('example1', () => {
        cy.visit('https://automationteststore.com/');
        
        cy.get("a[href*='category&path=']").contains("Makeup").click()
        // const skincareLlink = cy.get("a[href*='category&path=']").contains("Skincare")
        // following will fail
        // const haeder1 = cy.get('.maintext')
        // cy.log(haeder1)

        // this wil work

        cy.get('.maintext').then(($header)=>{
            const header1 =  $header.text();
            cy.log(header1);
        })
        

    });
});