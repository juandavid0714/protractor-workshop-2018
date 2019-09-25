import { $, ElementFinder } from 'protractor';

export class ProductAddedPage {
  private addToCarButton: ElementFinder;

  constructor () {
    this.addToCarButton = $('#add_to_cart > button > span');
  }

  public async addToCar(): Promise<void> {
    await this.addToCarButton.click();
  }

}
