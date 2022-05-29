import BasePage from "./BasePage";

class ListingPage extends BasePage {
    get listItemTitleBox () { return cy.get('#listing-title'); }
    get selectCategoryDropdown () {return cy.get('.selectric .dropdown-select');}
    get browseAllCategoriesDropdownItem () { return cy.get('.browse-categories.last');}
    get category1TableOption () { return cy.get('#selector_0 option:nth-child(1)');}
    get category2TableOption () { return cy.get('#selector_1 option:nth-child(1)');}
    get listInOnlyOneRadio () { return cy.get('#one-category-radio');}
    get categoryNextbutton () { return cy.get('#submit_button');}

    navigate(){
        cy.wait(1000);
        cy.visit("/Sell/Category.aspx?group=GENERAL&rptpath=1-&fromLink=general");
    }
    listingItem (title){
        this.listItemTitleBox.type(title);
        this.selectCategoryDropdown.click();
        this.browseAllCategoriesDropdownItem.click();
        this.category1TableOption.click();
        this.category2TableOption.click();
        this.listInOnlyOneRadio.click();
        this.categoryNextbutton.click();
    }
}
export default ListingPage;