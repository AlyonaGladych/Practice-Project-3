let WebButton = require("./22.08 Homework WebButton.js");

class AdminPage {
    constructor() {
        this.productSaveButton = new WebButton(element(by.id('saveProductAdd')), 'Save product button');
        this.administrationTab = element(by.css('#navbar > ul > li:nth-child(2) > a'));
        this.addNewProduct = new WebButton(element(by.css('body > app > main > administration > div.container > div > div > projects > div > div.section > div.section__left > div:nth-child(3) > div > div > a > span:nth-child(2)')), "AddNewProduct Button");
        this.productName = element(by.id('product-name'));
        this.productFamilyDropdown = element(by.css('#change-product-family-list > dropdown-gds > ss-multiselect-dropdown > div > button > span'));
        this.productFamily = element(by.css('#change-product-family-list > dropdown-gds > ss-multiselect-dropdown > div > ul > li:nth-child(7) > a > span')).getText();
        this.confirmMessage = element(by.css('#toast-container > div > div:nth-child(2) > span'));
        this.errorMessage = element(by.css('#toast-container > div > div:nth-child(3) > span'));
        this.noProdFamilyErrorMessage = element(by.css('body > app > main > administration > div.container > div > div > projects > div > div.section > div.col-md-12.section__right > project > div > div.section-body.add-product.ps-container.ps-theme-default > form > div:nth-child(1) > div.edit-poduct-family-list > div'));
    }

    async get() {
        await browser.get('http://eds_university.eleks.com/modules/3/products');
    };

    async clickAdministration() {
        await this.administrationTab.click();
    };

    async clickAddProduct() {
        await this.addNewProduct.click();    
    };

    async setProductName(productName) {
        await this.productName.sendKeys(productName);    
    };
    
    async clickProdFamilyDropdown() {
        await this.productFamilyDropdown.click();
    };

    async clickProdFamily() {
        await this.productFamily.click();
    };

    async clickSave() {
        await this.productSaveButton.click();
    };

    async getConfirmation() {
        return this.errorMessage.getText();
    };

    async getError() {
        return this.confirmMessage.getText();
    };

    async getNoProdFamilyError() {
        return this.confirmMessage.getText();
    };
};

module.exports = new AdminPage();
