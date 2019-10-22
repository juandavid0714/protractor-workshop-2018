import { $, ElementFinder } from 'protractor';

export class ShippinStepPage {

  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton = $('#form button');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }

}
