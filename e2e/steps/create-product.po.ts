import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(route) {
    return browser.get(route);
  }

  getElementText(elementHook) {
    return element(by.css(elementHook)).getText();
  }
}
