///<reference types="Cypress"/>
///<reference types="@cypress/xpath"/>



describe('data drivenm testing', () => {

    before(()=>{
        cy.fixture('example').then((data)=>{
            // this.data=data
            globalThis.data = data
        })
    })



    it('DD', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type(data.name);
        cy.get('input[type="password"]').type(data.password);
        cy.get('button[type="submit"]').click();
        cy.get('.oxd-userdropdown-name').click();
        cy.contains('Logout').click();

    });
});