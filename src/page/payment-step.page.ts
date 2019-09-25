import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {

  private sigInButton: ElementFinder;
  private email: ElementFinder;
  private password: ElementFinder;

  constructor () {
    this.sigInButton = $('#SubmitLogin > span');
    this.email = $('#email');
    this.password = $('#passwd');
  }

  public async registerEmail(): Promise<void> {
    await this.sigInButton.click();
  }

  public async fillEmailPassword(): Promise<void> {
    this.email.sendKeys('aperdomobo@gmail.com');
    this.password.sendKeys('WorkshopProtractor');
  }

}
