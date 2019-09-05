import { $, protractor, browser, ElementFinder } from 'protractor';

export class ShippinStepPage {

  private checkBoxAgreeTerms: ElementFinder;

  constructor () {
    this.checkBoxAgreeTerms = $('#cgv');
  }

  private EC = protractor.ExpectedConditions;

  public async selectCheckBoxAgreeTerms(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.checkBoxAgreeTerms);
    browser.wait(isClickable, 5000);
    this.checkBoxAgreeTerms.click();
  }
}
