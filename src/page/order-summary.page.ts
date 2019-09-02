import { $, protractor, browser } from 'protractor';

export class OrderSummaryPage {
  private EC = protractor.ExpectedConditions;
  private proceedToCheckoutButton = $('.cart_navigation span');

  public async proceedToCheckout(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.proceedToCheckoutButton);
    browser.wait(isClickable, 15000);
    this.proceedToCheckoutButton.click();
  }
}
