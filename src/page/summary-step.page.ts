import { $, protractor, browser, ElementFinder } from 'protractor';

export class SummaryStepPage {

  private confirmOrderButton: ElementFinder;
  private mensaje: ElementFinder;

  constructor () {
    this.confirmOrderButton = $('#cart_navigation > button > span');
    this.mensaje = $('#center_column > div > p > strong');
  }

  private EC = protractor.ExpectedConditions;

  public async confirmOrder(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.confirmOrderButton);
    browser.wait(isClickable, 5000);
    this.confirmOrderButton.click();
  }

  public async mensajeText(): Promise<string> {
    const isVisible = this.EC.presenceOf(this.mensaje);
    browser.wait(isVisible, 5000);
    const mensaje = this.mensaje.getText();
    return mensaje;
  }

}
