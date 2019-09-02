import { $, protractor, browser } from 'protractor';

export class SignInStepPage {
  private EC = protractor.ExpectedConditions;
  private payByBankWireOption = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');

  public async payByBankWire(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.payByBankWireOption);
    browser.wait(isClickable, 5000);
    this.payByBankWireOption.click();
  }
}
