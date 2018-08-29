let WebButton = require("./WebButton.js");

describe('LogIn', function () {
	
	let loginButton = new WebButton(element(by.css('.login-button')), "Login Button");
        
    it('Error message displayed for incorrect email address format', async () => {
        await browser.get('http://eds_university.eleks.com/login');
		await loginButton.click();		
        await element(by.id('email')).sendKeys('defaultText');
		await element(by.id('userPassword')).click();

        let errorMessage = await element(by.css('div.overlay > div > div > div:nth-child(1) > div > span')).getText();
		console.log(errorMessage);
	

        expect(errorMessage).toEqual('Email is not valid');
        console.log(`Error is ${errorMessage}`);
    });
});
