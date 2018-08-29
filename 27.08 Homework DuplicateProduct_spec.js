let AdminPage = require('./27.08 Homework AdminPage.js');

describe('Add new product', function() {
    it('should not be able to create with duplicate name', async function() {
        await AdminPage.get();

        await AdminPage.clickAdministration();

        await AdminPage.clickAddProduct();

        await AdminPage.setProductName('Alyona_Gladych Module 6');

        await AdminPage.clickProdFamilyDropdown();

        await AdminPage.clickProdFamily();

        await AdminPage.clickSave();

        //creating product with the same name

        await AdminPage.clickAddProduct();

        await AdminPage.setProductName('Alyona_Gladych Module 6');

        await AdminPage.clickProdFamilyDropdown();

        await AdminPage.clickProdFamily();

        await AdminPage.clickSave();

        expect(await AdminPage.getError()).toEqual('Name must be unique');

        console.log(`Error message: ${AdminPage.getError()}`);
    });
}); 
