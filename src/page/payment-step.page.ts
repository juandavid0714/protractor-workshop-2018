import { $, protractor, browser, ElementFinder } from 'protractor';

export class PaymentStepPage {

  private sigInButton: ElementFinder;
  private email: ElementFinder;
  private password: ElementFinder;

  constructor () {
    this.sigInButton = $('#SubmitLogin > span');
    this.email = $('#email');
    this.password = $('#passwd');
  }

  private EC = protractor.ExpectedConditions;

  public async registerEmail(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.sigInButton);
    browser.wait(isClickable, 5000);
    this.sigInButton.click();
  }

  public async fillEmailPassword(): Promise<void> {
    this.email.sendKeys('aperdomobo@gmail.com');
    this.password.sendKeys('WorkshopProtractor');
  }

}
