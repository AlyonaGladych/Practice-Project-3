let AdminPage = require('./27.08 Homework AdminPage.js');

describe('Add new product', function() {
    it('should be able to add new product', async function() {
        await AdminPage.get();

        await AdminPage.clickAdministration();

        await AdminPage.clickAddProduct();

        await AdminPage.setProductName('Alyona_Gladych Module 6');

        await AdminPage.clickSave();

        expect(await AdminPage.getNoProdFamilyError()).toEqual('Product Family is required.');

        console.log(`Error message: ${AdminPage.getNoProdFamilyError()}`);
    });
}); 
