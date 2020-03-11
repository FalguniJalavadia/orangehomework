Feature:

  @test
  Scenario Outline: user should not be able login in with invalid credentials
    When User enter username as "<Username>" and password as a "<password>"
    And user click on login
    Then user should see "<ErrorMessage>"
    Examples:
      | Username | password | ErrorMessage             |
      | ASDF     | asd1234  | Invalid credentials      |
      | asdf     | asdf1234 | Invalid credentials      |
      | ASDF     | ASDF1234 | Invalid credential       |
      | asdf     | Asdf1234 | Invalid credential       |
      |          | asdf1234 | user cannot be empty     |
      | ASDF     |          | password cannot be empty |
      |          |          | user cannot be empty     |
      |          | Asdf1234 | user cannot be empty     |
      | asdf     |          | password cannot be empty |








