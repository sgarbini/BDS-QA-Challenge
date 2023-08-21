Feature: Ebay Search

  Scenario: As a guest user, use the search bar and retrieve results
    Given I am on the Ebay home page
    When I select the search bar
    When I set the term "pilas" in the search bar
    When I select the search button
    Then I see the search results page
    
