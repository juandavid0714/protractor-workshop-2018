import { $, protractor, browser, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton = $('#layer_cart .layer_cart_cart div.button-container > a');
  }

  private EC = protractor.ExpectedConditions;

  public async proceedToCheckout(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.proceedToCheckoutButton);
    browser.wait(isClickable, 5000);
    await this.proceedToCheckoutButton.click();
  }
}
