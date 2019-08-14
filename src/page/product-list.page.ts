import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton = $('#form > p > button > span');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
