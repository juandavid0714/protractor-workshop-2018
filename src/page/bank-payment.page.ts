import { $, ElementFinder, browser, protractor } from 'protractor';

export class BankPaymentPage {
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton = $('a.btn.btn-default.button.button-medium span');
  }

  private EC = protractor.ExpectedConditions;

  public async proceedToCheckout(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.proceedToCheckoutButton);
    await browser.wait(isClickable, 2000);
    await this.proceedToCheckoutButton.click();
  }
}
