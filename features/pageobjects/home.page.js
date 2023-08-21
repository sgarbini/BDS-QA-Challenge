import { $ } from "@wdio/globals";
import Page from "./page.js";

class HomePage extends Page {
  get inputBarSearch() {
    return $('[class="gh-search__input"]');
  }

  get buttonSearch() {
    return $('[class="gh-search__submitbtn"]');
  }

  async selectSearchBar() {
    await this.inputBarSearch.waitForDisplayed();
    await this.inputBarSearch.click();
  }

  async inputSearchTerm(term) {
    await this.inputBarSearch.setValue(term);
  }

  async selectSeachButton() {
    await this.buttonSearch.waitForClickable();
    await this.buttonSearch.click();
  }
}

export default new HomePage();
