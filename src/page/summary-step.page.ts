import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {

  private confirmOrderButton: ElementFinder;
  private message: ElementFinder;

  constructor () {
    this.confirmOrderButton = $('#cart_navigation > button');
    this.message = $('#center_column strong');
  }

  public async confirmOrder(): Promise<void> {
    await this.confirmOrderButton.click();
  }

  public async mensajeText(): Promise<string> {
    return this.message.getText();
  }

}
