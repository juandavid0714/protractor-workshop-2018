import { $, protractor, browser, ElementFinder } from 'protractor';

export class SummaryStepPage {

  private confirmOrderButton: ElementFinder;
  private message: ElementFinder;

  constructor () {
    this.confirmOrderButton = $('#cart_navigation > button > span');
    this.message = $('#center_column > div > p > strong');
  }

  private EC = protractor.ExpectedConditions;

  public async confirmOrder(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.confirmOrderButton);
    await browser.wait(isClickable, 2000);
    await this.confirmOrderButton.click();
  }

  public async mensajeText(): Promise<string> {
    const isVisible = this.EC.presenceOf(this.message);
    await browser.wait(isVisible, 2000);
    const message = this.message.getText();
    return message;
  }

}
