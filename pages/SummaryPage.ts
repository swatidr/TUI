import { Page } from "@playwright/test";

export class SummaryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async confirmBooking() {
    const continueButton = this.page.getByText(
      "Continue To Passenger Details",
      { exact: true },
    );
    await continueButton.click();
  }
}
