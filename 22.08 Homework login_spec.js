let WebButton = require("./22.08 Homework WebButton.js");

describe('LogIn', function () {
    let loginButton = new WebButton(element(by.css('.login-button')), "Login Button");
    let signInButton = new WebButton(element(by.css('.iframe-wrap .login-button')), "Sign In Button");

    it('User is able to login with valid credentials', async () => {
        await browser.get('http://eds_university.eleks.com/login');
        await loginButton.click();
        await element(by.id('email')).sendKeys(browser.params.username);
        await element(by.id('userPassword')).sendKeys(browser.params.password);
        await signInButton.click();

        let name = await element(by.css('.user-name')).getText();

        expect(name).toEqual('Alyona Gladych');
        console.log(`Username is ${name}`);
    });
});
