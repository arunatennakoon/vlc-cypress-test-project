import BasePage from "./BasePage";

class PriceAndDurationpage extends BasePage {
    get startPriceBox () { return cy.get('#startPriceInput');}
    get pricingNextButton () { return cy.get('#submit1');}

    addPriceDetails (price){
        this.startPriceBox.type(price);
        this.pricingNextButton.click();
    }
}
export default PriceAndDurationpage;