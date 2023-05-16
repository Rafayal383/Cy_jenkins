describe('vars,promises', () => {
    it('example1', () => {
        cy.visit('https://automationteststore.com/');
        //suing cypress cmd
        // cy.xpath("(//*[text()='Contact Us'])[2]").click();
        // cy.get('#ContactUsFrm').find('#field_11').should('contain','First name:')

        // using jquery cmd

        // cy.xpath("(//*[text()='Contact Us'])[2]").click();
        // cy.get('#ContactUsFrm').then((fieldname)=>{
        //     const text = fieldname.find("#field_11").text();
        //     expect(text).to.contain("First name:");
        // })

        //closure

        // cy.get("#field_11").then((Text)=>{
        //     cy.log(Text.text());
        //     cy.log(Text);
        // })

//aliasing 
        // cy.get("------").should("-----").as("sanju");
        // cy.get("@sanju").click()

        //when we defined it 
        /*
        1. if i have a identify a element with a series of chaining/ paremt -child chaining
        2) if i am using this element in multiple places and then i use alias 
       */


    });
});