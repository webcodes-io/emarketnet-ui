import { AppPage } from './create-product.po';
import { defineSupportCode, setDefaultTimeout } from 'cucumber';
import { expect } from 'chai';

defineSupportCode(({Given, When, Then, Before}) => {
  let page: AppPage;

  Before(() => {
    page = new AppPage();
    setDefaultTimeout(60 * 1000);
  });

  When(/^user navigates to create-product page$/,
    function() {
      return page.navigateTo('/create-product');
    });

  Then(/^user can see page title$/,
    function() {
      return page.getElementById('create-product-title').getText().then(el =>
        expect(el).equal('Create product:')
      );
    });

  When(/^user enters product name T-Rex$/,
   function() {
     return page.getElementById('productName').sendKeys('T-Rex').then(el => el);
    });

  When(/^user enters product description an intuitive toy$/,
    function() {
      return page.getElementById('productDescription').sendKeys('an intuitive toy').then(el => el);
    });

  When(/^user enters product price 10.00$/,
    function() {
      return page.getElementById('productPrice').sendKeys('10.00').then(el => el);
    });

  When(/^user enters submits button$/,
    function() {
      return page.submitCreateForm();
    });

  Then(/^user sees created product details on the page$/, () => {

    page.getElementById('createdProductName').getText().then(el =>
      expect(el).equal('Product name: T-Rex')
    );

    page.getElementById('createdProductDescription').getText().then(el =>
      expect(el).equal('Product description: toy')
    );

    page.getElementById('createdProductPrice').getText().then(el =>
      expect(el).equal('Product price: 10.00')
    );

    return;
  });

});
