import { $, protractor, browser } from 'protractor';

export class ProductAddedModalPage {
  private EC = protractor.ExpectedConditions;
  private proceedToCheckoutButton = $('#center_column > form > p > button > span');

  public async proceedToCheckout(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.proceedToCheckoutButton);
    browser.wait(isClickable, 5000);
    this.proceedToCheckoutButton.click();
  }
}
