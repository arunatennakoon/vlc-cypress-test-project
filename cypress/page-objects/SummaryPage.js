import BasePage from "./BasePage";

class SummaryPage extends BasePage {
    get auctionStartedLabel () { return cy.get('#mainContent h1');}

    validateAuctionStartLabel (startedText){
        this.auctionStartedLabel.should("have.text",startedText )
    }
}
export default SummaryPage;