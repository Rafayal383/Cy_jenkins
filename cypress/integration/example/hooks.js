describe('hooks', () => {
    before(() => {
        cy.log("Run onceBefore all the tests in the blocks")
    });

    after(() => {
        cy.log("Runs On after all test run in the blocks")
    });

    beforeEach(() => {
        cy.log("Run before each test case is executed")
    });

    afterEach(() => {
        cy.log("Runs after each test cases")
    });

    it('first case', () => {
        cy.log("First Test case")
    });

    it('secound case', () => {
        cy.log("Secound Test case");
    });

});