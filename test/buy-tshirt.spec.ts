import { browser } from 'protractor';
import { MenuContentPage } from '../src/page';
import { AddressStepPage } from '../src/page/address-step.page';
import { BankPaymentPage } from '../src/page/bank-payment.page';
import { OrderSummaryPage } from '../src/page/order-summary.page';
import { PaymentStepPage } from '../src/page/payment-step.page';
import { ProductAddedModalPage } from '../src/page/product-added-modal.page';
import { ProductListPage } from '../src/page/product-list.page';
import { ShippinStepPage } from '../src/page/shipping-step.page';
import { SignInStepPage } from '../src/page/sign-in-step.page';
import { SummaryStepPage } from '../src/page/summary-step.page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const productListPage: ProductListPage = new ProductListPage();
  const shippinStepPage: ShippinStepPage = new ShippinStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  it('then should be bought a t-shirt', async () => {
    describe('when open Products Page', () => {
      beforeEach(async () => {
        await browser.get('http://automationpractice.com/');
        await menuContentPage.goToTShirtMenu();
        await addressStepPage.addToCar();
        await bankPaymentPage.proceedToCheckout();
        await orderSummaryPage.proceedToCheckout();
        await paymentStepPage.fillEmailPassword();
        await paymentStepPage.registerEmail();
        await productAddedModalPage.proceedToCheckout();
        await shippinStepPage.selectCheckBoxAgreeTerms();
        await productListPage.proceedToCheckout();
        await signInStepPage.payByBankWire();
        await summaryStepPage.confirmOrder();
        await expect(summaryStepPage.mensajeText())
      .toBe('Your order on My Store is complete.');
      });
    });
  });
});
