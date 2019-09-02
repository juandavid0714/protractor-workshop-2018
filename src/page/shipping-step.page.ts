import { $, protractor, browser } from 'protractor';

export class ShippinStepPage {
  private EC = protractor.ExpectedConditions;
  private checkBoxAgreeTerms = $('#cgv');

  public async selectCheckBoxAgreeTerms(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.checkBoxAgreeTerms);
    browser.wait(isClickable, 5000);
    this.checkBoxAgreeTerms.click();
  }
}
