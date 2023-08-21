import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";

import HomePage from "../pageobjects/home.page.js";
import SearchResultsPage from "../pageobjects/searchResults.page.js";

Given(/^I am on the Ebay home page$/, async () => {
  await browser.url("https://www.ebay.com/");
});

When(/^I select the search bar$/, async () => {
  await HomePage.selectSearchBar();
});

When(/^I select the search button$/, async () => {
  await HomePage.selectSeachButton();
});

Then(/^I see the search results page$/, async () => {
  await expect(await SearchResultsPage.getSearchResults());
  await SearchResultsPage.getAmountOfResults();
});

When(/^I set the term "([^"]*)?" in the search bar$/, async (term) => {
  await HomePage.inputSearchTerm(term);
});
