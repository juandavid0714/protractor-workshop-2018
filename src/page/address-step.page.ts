import { $, ElementFinder, protractor, browser } from 'protractor';

export class AddressStepPage {
  private productImage: ElementFinder;
  private addToCarButton: ElementFinder;
  private EC = protractor.ExpectedConditions;

  constructor () {
    this.productImage = $('#center_column a.product_img_link > img');
    this.addToCarButton = $('#add_to_cart > button');
  }

  public async selectProduct(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.productImage);
    await browser.wait(isClickable, 2000);
    await this.productImage.click();
  }

  public async addToCar(): Promise<void> {
    await this.addToCarButton.click();
  }

}
