Feature: Check availability of practitioners
Scenario: Check availability
    Given I go to "/"
    When I search for Practitioner "Test QATECHNIQUE"
    Then I see the availability