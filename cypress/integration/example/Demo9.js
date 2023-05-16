

describe('Web Table ', () => {
    it('web table 1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath('//tbody/tr/td[2]').each(($el,index,$list)=>{
            const text = $el.text();
            if(text.includes("Python")){
                cy.wrap($el).next().then((p)=>{
                    cy.log(p.text())
                })
            }
        })
    });
});