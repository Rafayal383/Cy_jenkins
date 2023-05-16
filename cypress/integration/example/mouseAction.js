///<reference types="Cypress"/>
///<reference types="@cypress/xpath"/>


describe('', () => {
    it.skip('mouse action', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.should('have.attr','name')
        cy.get('#mousehover').invoke('show');

        cy.contains('Top').click({force:true})
        cy.get('#mousehover').trigger('mouseover').click({force:true});
    });

    it.skip('mouse double click  and right click', () => {
        cy.visit('https://demoqa.com/buttons')

        cy.get('#doubleClickBtn').dblclick();

        cy.get('#rightClickBtn').rightclick();
    });

    it.skip('drag and drop  prev tech', () => {
        cy.visit('https://jqueryui.com/droppable/')

        cy.get('#draggable').trigger('mousedown')

        cy.get('#droppable').trigger('mouseover').trigger('mouseup');
    });

    it.skip('drag and drop  new tech without iframe', () => {
        cy.visit('https://demoqa.com/droppable/')

        cy.get('#draggable').trigger('mousedown',({which: 1}))

        cy.get('#droppable').trigger('mousemove').trigger('mouseup',({force:true}));
    });

    it.skip('scroll', () => {
        cy.visit('https://www.google.com/')
        cy.get('*[name="q"]').type("Masai{enter}");

        cy.wait(12000);

        // cy.scrollTo(0,1200);
        // cy.wait(2000);
        // cy.scrollTo(0,-1200);

        cy.contains('Maasai people').scrollIntoView().click();
    });
     it('file upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').selectFile("C:/Users/ajay rafayal/Pictures/supermacy.jpeg");

     });

});