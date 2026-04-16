Feature: Ecommerce validations

Scenario: placing the order
Given a login to Ecommerce application with "panchanijayshree1@gmail.com" and "Cucumber2@"
When  Add "ZARA COAT 3" to cart
Then Verify "ZARA COAT 3" is displayed in the cart
When Enter Valid Details and place the order
Then Verify Order is present in the orderHistory