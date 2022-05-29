/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Listing", () => {
    cy.login("Auto.Val@valtest.co.nz", "Valocity123");
    cy.listingItem("item1");
    cy.addListingDetails("item description");
    cy.addPriceDetails("100");
    cy.addPaymentAndShipping();
    cy.continueWithoutPhoto();
    cy.chosePackage();
    cy.startAuction();
    cy.validateStartedText("Your auction has started");
  });
});
