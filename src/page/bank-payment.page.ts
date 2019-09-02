import { $, protractor, browser } from 'protractor';

export class BankPaymentPage {

  private EC = protractor.ExpectedConditions;
  private proceedToCheckoutButton = $('[style*="display: block;"] .button-container > a');

  public async proceedToCheckout(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.proceedToCheckoutButton);
    browser.wait(isClickable, 15000);
    this.proceedToCheckoutButton.click();
  }
}
