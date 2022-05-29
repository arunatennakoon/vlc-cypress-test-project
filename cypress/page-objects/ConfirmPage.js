import BasePage from "./BasePage";

class ConfirmPage extends BasePage {
    get startMyAuctionButton () { return cy.get('#submit_sell');}

    startAuction (){
        this.startMyAuctionButton.click();
    }
}
export default ConfirmPage;