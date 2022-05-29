/// <reference types="cypress" />

describe("List items", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Listing a new item", () => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
    cy.listingItem("item1");
    cy.addListingDetails("item description");
    cy.addPriceDetails("100");
    cy.addPaymentAndShipping();
    cy.continueWithoutPhoto();
    cy.chosePackage();
    cy.startAuction();
    cy.validateStartedText("Your auction has started.");
  });
});
