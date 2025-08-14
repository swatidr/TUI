import { test } from "@playwright/test";
import { HomePage } from "../pages/homepage";
import { SearchResultsPage } from "../pages/SearchResultsPage";
import { SummaryPage } from "../pages/SummaryPage";
import { PassengerDetailsPage } from "../pages/PassengerDetailsPage";
import { CardDetailsPage } from "../pages/cardDetailsPage";

test("test TUI booking flow", async ({ page }) => {
  const home = new HomePage(page);
  const searchresults = new SearchResultsPage(page);
  const summarypage = new SummaryPage(page);
  const passengerdetails = new PassengerDetailsPage(page);
  const carddetails = new CardDetailsPage(page);

  await home.navigateToHomePage();
  await searchresults.selectAnyPackage();
  // await searchresults.AlternateDate();
  await summarypage.confirmBooking();
  await passengerdetails.fillPassengerDetails();
  await carddetails.CardDetails();
});
