import { AppPage } from './create-product.po';
import { defineSupportCode } from 'cucumber';
import { expect } from 'chai';

defineSupportCode(({Given, When, Then, Before}) => {
	let page: AppPage;

	Before(() => {
    	page = new AppPage();
  	});

  Given(/^Open browser$/, function() {
    console.log('started test');
  });

  When(/^user navigates to create-product page$/,
    function() {
      return page.navigateTo('/create-product');
    });

  Then(/^user can see page title$/,
    function() {
      return page.getElementText('#create-product-title').then( el => {
        return expect(el.getText()).equal('ABC');
      });
  });

});
