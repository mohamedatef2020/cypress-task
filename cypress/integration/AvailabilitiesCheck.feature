Feature: Check availability of practitioners
Scenario: Check availability
    Given I go to "/"
    When I search for Practitioner "Test QATECHNIQUE"
    And I choose the reason "Ablation de fils"
    Then I see the availability