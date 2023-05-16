

describe('three ways', () => {
    // it('noramal', () => {
    //     cy.visit('https://automationteststore.com/');
         
    //     cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img').click();
    // });

    // it('contains', () => {
    //     cy.visit('https://automationteststore.com/');
    //     cy.get('.productname').contains('Skinsheen Bronzer Stick').click();
    // });

    it('index', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.prdocutname').eq(0).click();
    });
});