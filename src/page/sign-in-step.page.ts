import { $, protractor, browser, ElementFinder } from 'protractor';

export class SignInStepPage {

  private payByBankWireOption: ElementFinder;

  constructor () {
    this.payByBankWireOption = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  private EC = protractor.ExpectedConditions;

  public async payByBankWire(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.payByBankWireOption);
    await browser.wait(isClickable, 2000);
    await this.payByBankWireOption.click();
  }
}
