import { $, protractor, browser } from 'protractor';

export class PaymentStepPage {
  private EC = protractor.ExpectedConditions;
  private sigInButton = $('#SubmitLogin > span');
  private email = $('#email');
  private password = $('#passwd');

  public async registerEmail(): Promise<void> {
    const isClickable = this.EC.elementToBeClickable(this.sigInButton);
    browser.wait(isClickable, 15000);
    this.sigInButton.click();
  }

  public async fillEmailPassword(): Promise<void> {
    const isVisible = this.EC.visibilityOf(this.email);
    browser.wait(isVisible, 15000);
    this.email.sendKeys('aperdomobo@gmail.com');
    this.password.sendKeys('WorkshopProtractor');
  }

}
