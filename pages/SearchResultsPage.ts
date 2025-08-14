import { Page } from "@playwright/test";

export class SearchResultsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectAnyPackage() {
    // //const searchResultsList = this.page.locator('[data-test-id="search-results-list"] section');
    // await this.page.getByRole('listitem').filter({ hasText: /^TUI fly Netherlands$/ }).getByLabel('checkbox').click();
    // await this.page.goto('https://www.tuiholidays.ie/f/packages?airports%5B%5D=ORK&units%5B%5D=ESP%3ACOUNTRY&when=16-08-2025&until=&flexibility=true&monthSearch=false&flexibleDays=3&flexibleMonths=&noOfAdults=2&noOfChildren=0&childrenAge=&duration=7115&choiceSearch=true&searchRequestType=ins&searchType=search&sp=true&multiSelect=true&room=&isVilla=false&reqType=&sortBy=#949b519d850e815d798648232242316e4aa80764');
    // await this.page.locator('[data-test-id="search-results-list"] section').filter({ hasText: 'TUI SUNEOTUI Suneo Estivalin' }).locator('[data-test-id="continue-button"]').nth(3).click();
    // const continueButton = this.page.getByText('Continue', { exact: true });
    // await continueButton.click();

    await this.page
      .locator('[data-test-id="search-results-list"] section')
      .filter({
        hasText:
          "LOG IN TO YOUR MYTUI ACCOUNT TO SAVE €100 ON THIS HOLIDAYGrupotel Cinco Plazas",
      })
      .locator('[data-test-id="continue-button"]')
      .nth(3)
      .click();
    const continueButton = this.page.getByText("Continue", { exact: true });
    await continueButton.click();
  }
}

// async AlternateDate() {
//   // Click on the "Alternate Dates" button
//   // await this.page.getByLabel('Months').selectOption('1');
//   // await this.page.getByRole('button', { name: 'Next month, Monthly Calendar' }).click();
//   await this.page.getByRole('gridcell', { name: 'Thursday, 14 August 2025,' }).click();
//   await this.page.getByText('Continue').click();

// Select the first available date from the dropdown
// const firstAvailableDate = this.page.getByRole('option').first();
// await firstAvailableDate.click();

// // Click on the "Search" button to apply the selected date
// const searchButton = this.page.getByText('Search', { exact: true });
// await searchButton.click();
