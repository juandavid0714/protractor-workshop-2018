import { $, ElementFinder } from 'protractor';

export class ShippinStepPage {

  private checkBoxAgreeTerms: ElementFinder;
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.checkBoxAgreeTerms = $('#uniform-cgv > span');
    this.proceedToCheckoutButton = $('#form > p > button');
  }

  public async selectCheckBoxAgreeTerms(): Promise<void> {
    await this.checkBoxAgreeTerms.click();
  }

  public async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }

}
