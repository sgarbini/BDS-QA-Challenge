import { $ } from "@wdio/globals";
import Page from "./page.js";

class SearchResultsPage extends Page {
  get amountOfResults() {
    return $(
      "//div[@class='srp-controls__control srp-controls__count']//span[1]"
    );
  }

  get searchResults() {
    return $("[class='srp-controls__count-heading']");
  }

  async getAmountOfResults() {
    await this.amountOfResults.waitForDisplayed();
    console.log(
      "The amount of Results is:",
      await this.amountOfResults.getText()
    );
  }

  async getSearchResults() {
    await this.searchResults.isDisplayed();
  }
}

export default new SearchResultsPage();
