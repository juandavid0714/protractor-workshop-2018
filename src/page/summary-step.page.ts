import { $, protractor, browser } from 'protractor';

export class SummaryStepPage {
  private EC = protractor.ExpectedConditions;
  private confirmOrderButton = $('#cart_navigation > button > span');
  private mensaje = $('#center_column > div > p > strong');

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
