import { Page } from "@playwright/test";

export class CardDetailsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async CardDetails() {
    // Get the iframe containing the payment form
    const paymentIframeLocator = this.page
      .locator("#payment-opp-root iframe")
      .first();
    const paymentFrame = paymentIframeLocator.contentFrame();

    // Inside the iframe: card details fields
    const cardNumberInput = paymentFrame?.getByTestId("card-number");
    const cardholderNameInput = paymentFrame?.getByTestId("cardholder-name");
    const expiryMonthInput = paymentFrame?.getByTestId("expire-month");
    const expiryYearInput = paymentFrame?.getByTestId("expire-year");
    const cvvInput = paymentFrame?.getByTestId("cvv");

    // Outside the iframe
    const termsCheckbox = this.page
      .locator("label")
      .filter({ hasText: "I confirm that by booking a" })
      .getByLabel("default checkbox");
    const payNowButton = this.page.getByTestId("payment-button");

    // Fill in the card details
    if (
      paymentFrame &&
      cardNumberInput &&
      cardholderNameInput &&
      expiryMonthInput &&
      expiryYearInput &&
      cvvInput
    ) {
      await cardNumberInput.click();
      await cardNumberInput.fill("1234 1234 5678 5678");

      await cardholderNameInput.click();
      await cardholderNameInput.fill("Bob");

      await expiryMonthInput.click();
      await expiryMonthInput.fill("11");

      await expiryYearInput.click();
      await expiryYearInput.fill("30");

      await cvvInput.click();
      await cvvInput.fill("111");
    } else {
      throw new Error("Payment iframe or fields could not be located");
    }

    // Accept terms and proceed
    await termsCheckbox.click();
    await payNowButton.click();
  }
}
