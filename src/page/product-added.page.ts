import { $, protractor, browser, ElementFinder } from 'protractor';

export class ProductAddedPage {
  private addToCarButton: ElementFinder;

  constructor () {
    this.addToCarButton = $('#add_to_cart > button > span');
  }

  private EC = protractor.ExpectedConditions;

  public async addToCar(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.addToCarButton);
    await browser.wait(isClickable, 2000);
    await this.addToCarButton.click();
  }

}
