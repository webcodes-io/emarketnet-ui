import { AppPage } from './create-product.po';
import { defineSupportCode } from 'cucumber';
import { expect } from 'chai';

defineSupportCode(({Given, When, Then, Before}) => {
  let page: AppPage;

  Before(() => {
    page = new AppPage();
  });

  When(/^user navigates to create-product page$/,
    function() {
      console.log('navigate');
      return page.navigateTo('/create-product');
    });

  Then(/^user can see page title$/,
    function() {
      return page.getElementText('create-product-title').getText().then(el =>
        expect(el).equal('Create product:')
      );
    });

});
