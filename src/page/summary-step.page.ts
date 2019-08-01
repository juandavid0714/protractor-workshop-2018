import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private confirmOrderButton: ElementFinder;

  constructor () {
    this.confirmOrderButton = $('#cart_navigation > button > span');
  }

  public async confirmOrder(): Promise<void> {
    await this.confirmOrderButton.click();
  }

  public async mensajeText(): Promise<string> {
    const mensaje = $('#center_column > div > p > strong').getText();
    return mensaje;

  }

}
