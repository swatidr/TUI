import { Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHomePage() {
    await this.page.goto("https://www.tuiholidays.ie");

    const acceptCookiesButton = this.page.getByRole("button", {
      name: "Accept",
    });
    if (await acceptCookiesButton.isVisible({ timeout: 2000 })) {
      await acceptCookiesButton.click();
    }

    const departureTextbox = this.page.getByRole("textbox", {
      name: "text input",
    });
    const dublinOption = this.page
      .locator("label")
      .filter({ hasText: "Dublin" });
    const airportsRegionButton = this.page
      .getByRole("region", { name: "airports" })
      .getByLabel("button");

    const destinationTextbox = this.page.getByRole("textbox", {
      name: "select destinations",
    });

    const departureDateTextbox = this.page.getByRole("textbox", {
      name: "select date",
    });
    const departureMonthSelect = this.page
      .getByRole("region", { name: "Departure date" })
      .getByLabel("Select");
    const departureDayCell = this.page.getByRole("cell", { name: "12" });

    const roomsAndGuestsTextbox = this.page.getByRole("textbox", {
      name: "rooms and guests",
    });
    const childSelect = this.page
      .getByLabel("child select")
      .getByLabel("Select");
    const childAgeSelect = this.page
      .getByRole("listitem", { name: "age select" })
      .getByLabel("Select");

    const searchButton = this.page.getByText("Search", { exact: true });

    // Interactions
    await departureTextbox.click();
    await dublinOption.click();
    await airportsRegionButton.click();

    await destinationTextbox.click();
    await destinationTextbox.fill("Spain");
    // await this.page.getByRole('listitem').filter({ hasText: 'Spain' }).click(); // Optional

    await departureDateTextbox.click();
    await departureMonthSelect.selectOption("2025-12");
    await departureDayCell.click();

    await roomsAndGuestsTextbox.click();
    await childSelect.selectOption("1");
    await childAgeSelect.selectOption("4");
    await childSelect.click(); // Possibly to confirm or re-trigger

    await searchButton.click();
  }
}
