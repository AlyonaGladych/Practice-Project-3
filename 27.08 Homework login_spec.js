let LoginPage = require('./27.08 Homework LoginPage.js');

describe('login page', function() {
    it('should be able to login with valid credentials', async function() {
        await LoginPage.get();

        await LoginPage.clickLogin();

        await LoginPage.setName('alyonagladych@gmail.com');

        await LoginPage.setPassword('x&b*zmzA^oj');

        await LoginPage.clickSignin();

        let name = await element(by.css('.user-name')).getText();
		    console.log(`Username is ${name}`);

        expect(name).toEqual('Alyona Gladych');
    });
}); 
