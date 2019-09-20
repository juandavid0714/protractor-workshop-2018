import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private productImage: ElementFinder;

  constructor () {
    this.productImage = $('#center_column a.product_img_link > img');
  }

  public async selectProduct(): Promise<void> {
    await this.productImage.click();
  }

}
