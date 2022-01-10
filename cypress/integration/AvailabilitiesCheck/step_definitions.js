import { And, then, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I go to {string}', url => {
    cy.visit(url);
});

When('I search for Practitioner {string}', name => {
    cy.get("#downshift_input_0").click();
    cy.get("#downshift_input_0").type(name);
    cy.get("#downshift_input_0").wait(1000).type('{downarrow}{enter}');
});

And('I choose a reason {string}', reason => {
    cy.get("#consultationReasonName").click();
    cy.get(`[data-cy=${reason}]`).click();
});

Then('I see the availability', () => {
    cy.get(".search-card__rdv").should('be.visible');
});
