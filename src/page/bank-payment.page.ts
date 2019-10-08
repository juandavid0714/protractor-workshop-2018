import { $, ElementFinder, browser, protractor } from 'protractor';

export class BankPaymentPage {
  private proceedToCheckoutButton: ElementFinder;
  private EC = protractor.ExpectedConditions;

  constructor () {
    this.proceedToCheckoutButton = $('#layer_cart div.button-container > a');
  }

  public async proceedToCheckout(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.proceedToCheckoutButton);
    await browser.wait(isClickable, 2000);
    await this.proceedToCheckoutButton.click();
  }
}
