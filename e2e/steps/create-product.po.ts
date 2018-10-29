import {$, browser, by, element, protractor} from 'protractor';

export class AppPage {
  navigateTo(route) {
    return browser.get(route);
  }

  getElementText(elementHook) {
    return element(by.css(elementHook));
  }
}
