 Feature: Create new product
    Scenario: Navigate to create-product page
    	When user navigates to create-product page
      Then user can see page title

   Scenario: Create a product
     When user navigates to create-product page
     And user enters product name T-Rex
     And user enters product description an intuitive toy
     And user enters product price 10.00
     And user enters submits button
     Then user sees created product details on the page
