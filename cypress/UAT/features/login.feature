Feature: To validate OrangeHRM
  Background: OrangeHRM
    Given open the browsers and Navigate to the Login Page
  @PositveTesting
  Scenario Outline: Test OrangeHRM with Valid and invalid case
    When Enter the Name <name>
    And Enter the password <pwd>
    And Click on Loginbtn
    Then Login should be Successfull
    Examples:
      | name  | pwd      |
      | Admin | admin123 |
      | Admin | admin123 |
  @NegativeTesting
  Scenario: Test OrangeHRM with Invalid data
    When Enter the invalid name nandan
    And Enter the invalid pwd nandan123
    And Click on Loginbtn
    Then it should display Invalid credentials