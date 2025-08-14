import { Page } from "@playwright/test";

export class PassengerDetailsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillPassengerDetails() {
    // Lead Passenger
    const leadTitleDropdown = this.page.locator("#paxInfoTitle0");
    const leadFirstNameInput = this.page
      .getByLabel("lead passenger firstName")
      .getByRole("textbox", { name: "first name" });
    const leadLastNameInput = this.page
      .getByLabel("lead passenger lastName")
      .getByRole("textbox", { name: "surname" });
    const leadDayInput = this.page
      .getByRole("textbox", { name: "day" })
      .first();
    const leadMonthInput = this.page
      .getByRole("textbox", { name: "month" })
      .first();
    const leadYearInput = this.page
      .getByRole("textbox", { name: "year" })
      .first();
    const addressLookupInput = this.page.getByRole("textbox", {
      name: "Predictive Address Lookup",
    });
    const addressSuggestion = this.page.getByText(
      "Saint Mary's Church of Ireland, Church Street, ATHLONE, County Westmeath, N37",
    );
    const phoneInput = this.page.getByRole("textbox", {
      name: "telephone number",
    });
    const emailInput = this.page.getByRole("textbox", { name: "email id" });

    // Non-lead Adult Passenger
    const adult1TitleDropdown = this.page.locator("#paxInfoTitle1");
    const adult1FirstNameInput = this.page
      .getByLabel("non lead adult 1 first name")
      .getByRole("textbox", { name: "first name" });
    const adult1LastNameInput = this.page
      .getByLabel("non lead adult 1 surname")
      .getByRole("textbox", { name: "surname" });
    const adult1DayInput = this.page
      .getByRole("textbox", { name: "day" })
      .nth(1);
    const adult1MonthInput = this.page
      .getByRole("textbox", { name: "month" })
      .nth(1);
    const adult1YearInput = this.page
      .getByRole("textbox", { name: "year" })
      .nth(1);

    // Child Passenger
    const childTitleDropdown = this.page.locator("#paxInfoTitle2");
    const childFirstNameInput = this.page
      .getByLabel("children.0.firstName")
      .getByRole("textbox", { name: "first name" });
    const childLastNameInput = this.page
      .getByLabel("children 1 surname")
      .getByRole("textbox", { name: "surname" });
    const childDayInput = this.page
      .getByRole("textbox", { name: "day" })
      .nth(2);
    const childMonthInput = this.page
      .getByRole("textbox", { name: "month" })
      .nth(2);
    const childYearInput = this.page
      .getByRole("textbox", { name: "year" })
      .nth(2);

    const dobInfoNotice = this.page.getByText(
      "Date of birth (DD/MM/YYYY)Please fill in your date of birth in the format DD/MM",
    );
    const importantInfoCheckbox = this.page
      .getByLabel("important information")
      .getByRole("checkbox", { name: "checkbox" });
    const continueToPaymentButton = this.page.getByText("Continue To Payment");

    // Fill lead passenger details
    await leadTitleDropdown.selectOption("MR");
    await leadTitleDropdown.click();
    await leadFirstNameInput.click();
    await leadFirstNameInput.fill("Bob");
    await leadLastNameInput.click();
    await leadLastNameInput.fill("edison");
    await leadDayInput.click();
    await leadDayInput.fill("19");
    await leadMonthInput.click();
    await leadMonthInput.fill("10");
    await leadYearInput.click();
    await leadYearInput.fill("1986");
    await addressLookupInput.click();
    await addressLookupInput.fill("IRE");
    await addressSuggestion.click();
    await phoneInput.click();
    await phoneInput.fill("0123456789");
    await emailInput.click();
    await emailInput.fill("abc@mailinator.com");

    // Fill non-lead adult passenger details
    await adult1TitleDropdown.selectOption("MISS");
    await adult1TitleDropdown.click();
    await adult1FirstNameInput.click();
    await adult1FirstNameInput.fill("Roma");
    await adult1LastNameInput.click();
    await adult1LastNameInput.fill("smith");
    await adult1DayInput.click();
    await adult1DayInput.fill("12");
    await adult1MonthInput.click();
    await adult1MonthInput.fill("12");
    await adult1YearInput.fill("1998");

    // Fill child passenger details
    await childTitleDropdown.selectOption("MSTR");
    await childTitleDropdown.click();
    await childFirstNameInput.click();
    await childFirstNameInput.fill("sher");
    await childLastNameInput.click();
    await childLastNameInput.fill("jjj");
    await childDayInput.click();
    await childDayInput.fill("12");
    await childMonthInput.click();
    await childMonthInput.fill("12");
    await childYearInput.fill("2021");

    // Final steps
    await dobInfoNotice.click();
    await importantInfoCheckbox.click();
    await continueToPaymentButton.click();
  }
}
