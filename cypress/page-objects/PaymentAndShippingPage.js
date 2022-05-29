import BasePage from "./BasePage";

class PaymentsAndShippingPage extends BasePage {
    get iDontKnowShippingCostRadio () { return cy.get('#deliveryIdk');}
    get cashPaymentMethodRadio () { return cy.get('"#payment_cash_on_pickup');}
    get paymentNextButton () { return cy.get('#submit1');}

    addShippingDetails (){
        this.iDontKnowShippingCostRadio.click();
        this.cashPaymentMethodRadio.click();
        this.paymentNextButton.click();
    }
}
export default PaymentsAndShippingPage;