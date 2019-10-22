import { browser } from 'protractor';
import { MenuContentPage, AddressStepPage, BankPaymentPage, OrderSummaryPage, PaymentStepPage,
   ProductAddedModalPage, ShippinStepPage, SignInStepPage, SummaryStepPage  } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const shippinStepPage: ShippinStepPage = new ShippinStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  describe('then should be bought a t-shirt', () => {

    beforeEach(async () => {
      await browser.get('http://automationpractice.com/');
    });

    describe('this execute all the lines into the beforeEach', () => {

      beforeEach(async () => {
        await menuContentPage.goToTShirtMenu();
        await addressStepPage.selectProduct();
        await addressStepPage.addToCar();
        await bankPaymentPage.proceedToCheckout();
        await orderSummaryPage.proceedToCheckout();
        await paymentStepPage.fillEmailPassword();
        await paymentStepPage.registerEmail();
        await productAddedModalPage.proceedToCheckout();
        await shippinStepPage.selectCheckBoxAgreeTerms();
        await shippinStepPage.proceedToCheckout();
        await signInStepPage.payByBankWire();
        await summaryStepPage.confirmOrder();
      });

      it('Verify that your order is complete', async () => {
        expect(await summaryStepPage.mensajeText())
        .toBe('Your order on My Store is complete.');
      });
    });
  });
});
