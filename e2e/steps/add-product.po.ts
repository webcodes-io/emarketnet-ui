import {$, browser, by, element, protractor} from 'protractor';

export class AddProductPage {
  navigateTo() {
    return browser.get('/add-product');
  }

  fillTheForm(name: string, slug: string, summary: string) {
    return element(by.css('input.name')).sendKeys(name).then(() =>
    element(by.css('input.slug')).sendKeys(slug)).then(() =>
    element(by.css('textarea.summary')).sendKeys(summary));
  }

  sleep(time: number) {
    return browser.sleep(time);
  }

  submit() {
    return element(by.css('button')).click();
  }

  waitForTitleText(text: string) {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.textToBePresentInElement($('h1'), text), 3000);
  }

  getTitleText() {
    return element(by.css('h1')).getText();
  }
}
