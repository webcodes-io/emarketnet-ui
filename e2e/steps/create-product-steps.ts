import { AppPage } from './create-product.po';
import { defineSupportCode } from 'cucumber';
import { expect } from 'chai';

defineSupportCode(({Given, When, Then, Before}) => {
	let page: AppPage;

	Before(() => {
    	page = new AppPage();
  	});

  When(/^user navigates to create-product page$/, {timeout: 1 * 1000},
    function() {
      return page.navigateTo('/create-product');
    });

  Then(/^user can see page title$/, {timeout: 1 * 1000},
    function() {
      return expect(page.getElementText('#create-product-title')).equal('Create product:');
  });

});
