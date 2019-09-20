import { $, protractor, browser, ElementFinder } from 'protractor';

export class OrderSummaryPage {

  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton = $('.cart_navigation span');
  }

  private EC = protractor.ExpectedConditions;

  public async proceedToCheckout(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.proceedToCheckoutButton);
    await browser.wait(isClickable, 2000);
    await this.proceedToCheckoutButton.click();
  }
}
