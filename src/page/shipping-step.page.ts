import { $, protractor, browser, ElementFinder } from 'protractor';

export class ShippinStepPage {

  private checkBoxAgreeTerms: ElementFinder;
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.checkBoxAgreeTerms = $('#uniform-cgv > span');
    this.proceedToCheckoutButton = $('#form > p > button');
  }

  private EC = protractor.ExpectedConditions;

  public async selectCheckBoxAgreeTerms(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.checkBoxAgreeTerms);
    await browser.wait(isClickable, 2000);
    await this.checkBoxAgreeTerms.click();
  }

  public async proceedToCheckout(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.proceedToCheckoutButton);
    await browser.wait(isClickable, 2000);
    await this.proceedToCheckoutButton.click();
  }

}
