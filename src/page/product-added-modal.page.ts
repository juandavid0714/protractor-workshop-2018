import { $, protractor, browser, ElementFinder } from 'protractor';

export class ProductAddedModalPage {

  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton = $('#center_column > form > p > button > span');
  }

  private EC = protractor.ExpectedConditions;

  public async proceedToCheckout(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.proceedToCheckoutButton);
    browser.wait(isClickable, 5000);
    this.proceedToCheckoutButton.click();
  }
}
