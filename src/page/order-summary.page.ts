import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {

  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton = $('#center_column a.button.btn.btn-default.standard-checkout.button-medium');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
