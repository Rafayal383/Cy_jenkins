
class Logout_PO{
    Logout() {
        cy.get(".oxd-userdropdown-icon").click();
        cy.contains("Logout").click();
    }
}
export default Logout_PO;