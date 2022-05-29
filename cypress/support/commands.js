import LoginPage from '../page-objects/LoginPage'
import ListingPage from '../page-objects/ListingPage'
import ListingDetailsPage from '../page-objects/ListingDetailsPage'
import PriceAndDurationpage from '../page-objects/PriceAndDurationPage'
import PaymentAndShippingPage from '../page-objects/PaymentAndShippingPage'
import PhotoPage from '../page-objects/PhotoPage'
import ChosePackagePage from '../page-objects/ChosePackagePage'
import Confirmpage from '../page-objects/ConfirmPage'
import SummaryPage from '../page-objects/SummaryPage'

const loginPage = new LoginPage();
const listingPage = new ListingPage();
const listingDetailsPage = new ListingDetailsPage();
const priceAndDurationPage = new PriceAndDurationpage();
const paymentAndShippingPage = new PaymentAndShippingPage();
const photoPage = new PhotoPage();
const chosePackagePage = new ChosePackagePage();
const confirmPage = new Confirmpage();
const summaryPage = new SummaryPage();

Cypress.Commands.add('navigate', (email, password) => {
   cy.visit("/");
})

Cypress.Commands.add('login', (email, password) => {
    loginPage.fillLoginDetails(email,password);
    loginPage.login();
})

Cypress.Commands.add('listingItem', (title) => {
    listingPage.navigate();
    listingPage.listingItem(title)
})

Cypress.Commands.add('addListingDetails', (description) => {
    listingDetailsPage.addListingDetails(description);
})

Cypress.Commands.add('addPriceDetails', (price) => {
    priceAndDurationPage.addPriceDetails(price);
})

Cypress.Commands.add('addPaymentAndShipping', () => {
    paymentAndShippingPage.addShippingDetails();
})

Cypress.Commands.add('continueWithoutPhoto', () => {
    photoPage.continueWithoutPhoto();
})

Cypress.Commands.add('chosePackage', () => {
    chosePackagePage.chosePackage();
})

Cypress.Commands.add('startAuction', () => {
    confirmPage.startAuction()
})

Cypress.Commands.add('validateStartedText', (startedText) => {
    summaryPage.validateAuctionStartLabel(startedText);
})