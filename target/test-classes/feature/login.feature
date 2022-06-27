Feature: Uniform Sales page

  Background: Background section
    Given User is on homepage

  @signin
  Scenario Outline: Login with unauthorized user
    When user enter invalid username "<username>" and password "<password>"
    And User click on Submit button
    Then validation message appears

    Examples: 
      | username | password |
      | amit     | 123456   |

   @signin
  Scenario Outline: Login with authorized user
    When user enter valid username "<username>" and password "<password>"
    Then user click on catalog
    And user click on Sales
    And user click on Returns
    When user type customer name
    And Click on Filter button result is displayed
    Then user clicks on logout
   
    
    Examples: 
      | username | password |
      | admin  |  Admin@123 |
  