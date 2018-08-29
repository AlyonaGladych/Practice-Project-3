let WebButton = require("./WebButton.js");

describe('LogIn', function () {
    let loginButton = new WebButton(element(by.css('.login-button')), "Login Button");
    let signInButton = new WebButton(element(by.css('.iframe-wrap .login-button')), "Sign In Button");

    it('User cannot login with password empty string', async () => {
        await browser.get('http://eds_university.eleks.com/login');
        await loginButton.click();
        await element(by.id('email')).sendKeys(browser.params.username);
        await element(by.id('userPassword')).sendKeys('   ');
        await signInButton.click();

        let errorMessage = await element(by.css('#toast-container > div > div:nth-child(3) > span')).getText();

        expect(errorMessage).toEqual('Login or password is not correct');
        console.log(`Error message is ${errorMessage}`);
    });
});
