import { $, ElementFinder } from 'protractor';

export class ShippinStepPage {
  private checkBoxAgreeTerms: ElementFinder;

  constructor () {
    this.checkBoxAgreeTerms = $('#cgv');
  }

  public async selectCheckBoxAgreeTerms(): Promise<void> {
    await this.checkBoxAgreeTerms.click();
  }
}
