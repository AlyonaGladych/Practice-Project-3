let WebButton = require("./27.08 Homework WebButton.js");

class LoginPage {
    constructor() {
        this.loginButton = new WebButton(element(by.css('.login-button')), "Login Button");
        this.signInButton = new WebButton(element(by.css('.iframe-wrap .login-button')), "Sign In Button");
        this.usernameInput = element(by.id('email'));
        this.passwordInput = element(by.id('userPassword'));
        this.name = element(by.css('.user-name')).getText();
    }

    async get() {
        await browser.get('http://eds_university.eleks.com/login');
    };

    async clickLogin() {
        await this.loginButton.click();
    };

    async setName(username) {
        await this.usernameInput.sendKeys(username);    
    };

    async setPassword(password) {
        await this.passwordInput.sendKeys(password);
    };

    async clickSignin() {
        await this.signInButton.click();        	
    };

    async getName() {
        return this.name;
    };
};

module.exports = new LoginPage();

