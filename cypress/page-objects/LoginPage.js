import BasePage from "./BasePage";

class LoginPage extends BasePage {
    get loginOption () { return cy.get("#LoginLink");}
    get email () { return cy.get('#Email'); }
    get password () { return cy.get('#Password'); }
    get loginButton () { return cy.get('button#SignIn'); }

    fillLoginDetails (email,password){
        this.loginOption.click();
        this.email.type(email);
        this.password.type(password);
    }

    login() {
        this.clickCaptcha();
        cy.wait(1000);
        this.loginButton.click();
        cy.wait(1000);
    }

    clickCaptcha() {
        cy.get('iframe[title="reCAPTCHA"]')
        .first()
        .its('0.contentDocument.body')
        .should('not.be.undefined')
        .and('not.be.empty')
        .then(cy.wrap)
        .find('#recaptcha-anchor')
        .should('be.visible')
        .click();
    }
}
export default LoginPage;