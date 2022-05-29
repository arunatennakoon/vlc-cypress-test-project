import BasePage from "./BasePage";

class ListingDetails extends BasePage {
    get descriptionBox () { return cy.get("textarea[name='body']");}
    get listingDetailsNextButton () { return cy.get('#submit1');}

    addListingDetails (description){
        this.descriptionBox.type(description);
        this.listingDetailsNextButton.click();
    }
}
export default ListingDetails;