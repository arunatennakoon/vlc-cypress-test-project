import BasePage from "./BasePage";

class ChosePackagePage extends BasePage {
    get galleryCheckBox () { return cy.get('#medium .relists-unpurchased label');}
    get chosePackageNextButton () { return cy.get('#promo-submit');}

    chosePackage (){
        this.galleryCheckBox.click();
        this.chosePackageNextButton.click();
    }
}
export default ChosePackagePage;