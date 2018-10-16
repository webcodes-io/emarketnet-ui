import { defineSupportCode } from 'cucumber';

import { AddProductPage } from './add-product.po';

defineSupportCode(({Given, When, Then, Before}) => {
  let app: AddProductPage;

  Before(() => {
    app = new AddProductPage();
  });

  Given(/^user navigate to the create product page$/, () => {
    return app.navigateTo();
  });

  When(/^user enters random-product-name in product-name field$/, () => {
    return app.fillTheForm('Rohrer & Klingner Scabiosa', 'scabiosa',
      '50ml glass bottle of Rohrer & Klingner Scabiosa (Iron/Gall Nut-ink Scabiosa Purple) fountain pen ink. ' +
      ' We recommend not leaving this ink in your pen longer than a week as it may stain.');
  });

  When(/^click create-product button$/, () => {
    return app.submit();
  });

  Then(/^user sees upload-pictures page$/, () => {
    return app.waitForTitleText('Image Upload');
    // return app.waitForTitleText('Welcome to emarketnet-ui!');
  });

  Then(/^click skip button$/, () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then(/^users sees product-summary page$/, () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then(/^users see previous random-product-name on the screen$/, () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
});
