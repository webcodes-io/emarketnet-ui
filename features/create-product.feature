Feature: Create new product

  Scenario: Create product with minimal number of fields (optional fields are empty)
    Given user navigate to the create product page
    When user enters random-product-name in product-name field
    And click create-product button
    Then user sees upload-pictures page
    And click skip button
    Then users sees product-summary page
    And users see previous random-product-name on the screen

  Scenario: Create product with missing title
    Given user navigate to the create product page
    When user enters empty-string in product-name field
    And user click create-product button
    Then error message missing product name is displayed

  Scenario: Create product with duplicate name
    Given user navigate to the create product page
    When user enters random-product-name in product-name field
    And click create-product button
    Then user sees upload-pictures page
    And click skip button
    Then users sees product-summary page
    And users see previous random-product-name on the screen
    Then user navigate to the create product page
    When user enters random-product-name in product-name field
    And click create-product button
    Then user sees error page with 'Duplicate product name' message

  Scenario: Create product with title, summary and slug
    Given user navigate to the create product page
    When user enters random-product-name in product-name field
    When user enters 'Test product summary' in product-summary field
    When user enters randum-product-slug in product-slug field
    And click create-product button
    Then user sees upload-pictures page
    And click skip button
    Then users sees product-summary page
    And users see previous random-product-name on the screen
    And users see previous 'Test product summary' on the screen
    And users see previous random-product-slug on the screen
