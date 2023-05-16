import Homepage_Po from "../../support/PageObjects/OrangeHRM/Login_PO";
import LINK_PO from "../../support/PageObjects/OrangeHRM/Link_PO";
import Logout_PO from "../../support/PageObjects/OrangeHRM/Logout_PO";
describe('Test of POM for OrangeHRM', () => {
    const homepage_po = new Homepage_Po();
    const link_po = new LINK_PO();
    const logout_po = new Logout_PO();
    it('class', () => {
        homepage_po.visitHomePage()
        homepage_po.Login()
        link_po.Link_Click('Admin')
        logout_po.Logout();

    });
});