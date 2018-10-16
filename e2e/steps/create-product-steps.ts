import { defineSupportCode } from 'cucumber';

defineSupportCode(({Given, When, Then}) => {
  Given(/^user navigate to the create product page$/, () => {
    return 'pending';
  });

  When('user enters random-product-name in product-name field', () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('click create-product button', () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('user sees upload-pictures page', () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('click skip button', () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('users sees product-summary page', () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('users see previous random-product-name on the screen', () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
});
