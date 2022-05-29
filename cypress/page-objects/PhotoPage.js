import BasePage from "./BasePage";

class PhotoPage extends BasePage {
    get continueWithouPhotoButton () { return cy.get('#ContinueUpload');}

    continueWithoutPhoto (){
        this.continueWithouPhotoButton.click();
    }
}
export default PhotoPage;