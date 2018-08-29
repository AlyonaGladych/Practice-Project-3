function onPrepare() {
    console.log('Testing process has been started');
}

onPrepare();

describe('protractor_title', function () {
    it('should have a title', function () {
        browser.get('https://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
        element(by.model('first')).sendKeys(browser.params.number1);
        element(by.model('second')).sendKeys(browser.params.number2);
        element(by.id('gobutton')).click();
        expect(element(by.binding('latest')).getText());
        expect(element(by.binding('latest')).getText()).toEqual('7');
    });
});
