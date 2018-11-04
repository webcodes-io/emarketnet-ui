import {$, browser, by, element, protractor} from 'protractor';

export class AppPage {
  navigateTo(route) {
    return browser.get(route);
  }

  getElementById(elementHook) {
    return element(by.id(elementHook));
  }

  submitCreateForm() {
    return element(by.id('submitBtn')).click();
  }
}
