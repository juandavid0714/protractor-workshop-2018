import { $, protractor, browser, ElementFinder } from 'protractor';

export class SignInStepPage {

  private payByBankWireOption: ElementFinder;

  constructor () {
    this.payByBankWireOption = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  private EC = protractor.ExpectedConditions;

  public async payByBankWire(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.payByBankWireOption);
    browser.wait(isClickable, 5000);
    this.payByBankWireOption.click();
  }
}
