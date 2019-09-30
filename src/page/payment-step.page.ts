import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {

  private sigInButton: ElementFinder;
  private emailTxt: ElementFinder;
  private passwordTxt: ElementFinder;

  constructor () {
    this.sigInButton = $('#SubmitLogin > span');
    this.emailTxt = $('#email');
    this.passwordTxt = $('#passwd');
  }

  public async registerEmail(): Promise<void> {
    await this.sigInButton.click();
  }

  public async fillEmailPassword(): Promise<void> {
    await this.emailTxt.sendKeys('aperdomobo@gmail.com');
    await this.passwordTxt.sendKeys('WorkshopProtractor');
  }

}
