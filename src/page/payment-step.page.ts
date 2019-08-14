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
    await this.sigInButton.click();
    await this.email.sendKeys('aperdomobo@gmail.com');
    await this.password.sendKeys('WorkshopProtractor');
  }

}
