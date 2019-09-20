import { $, protractor, browser, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    // tslint:disable-next-line: max-line-length
    this.proceedToCheckoutButton = $('a.btn.btn-default.button.button-medium span');
  }

  private EC = protractor.ExpectedConditions;

  public async proceedToCheckout(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.proceedToCheckoutButton);
    await browser.wait(isClickable, 2000);
    await this.proceedToCheckoutButton.click();
  }
}
