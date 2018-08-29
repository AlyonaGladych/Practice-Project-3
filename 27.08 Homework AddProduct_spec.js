let LoginPage = require('./27.08 Homework AdminPage.js');

describe('Add new product', function() {
    it('should be able to add new product', async function() {
        await AdminPage.get();

        await AdminPage.clickAdministration();

        await AdminPage.clickAddProduct();

        await AdminPage.setProductName('Alyona_Gladych Module 6');

        await AdminPage.clickProdFamilyDropdown();

        await AdminPage.clickProdFamily();

        await AdminPage.clickSave();

        expect(await AdminPage.getConfirmation()).toEqual('Product Alyona_Gladych Module 6 successfully created');

        console.log(`Confirmation message: ${AdminPage.getConfirmation()}`);
    });
}); 
