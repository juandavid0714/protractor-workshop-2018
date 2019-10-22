import { $, ElementFinder } from 'protractor';

export class ProductListPage {

  private checkBoxAgreeTerms: ElementFinder;

  constructor () {
    this.checkBoxAgreeTerms = $('#uniform-cgv');
  }

  public async selectCheckBoxAgreeTerms(): Promise<void> {
    await this.checkBoxAgreeTerms.click();
  }

}
