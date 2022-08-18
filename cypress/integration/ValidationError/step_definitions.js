import { And, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I go to {string}', url => {
    cy.intercept("GET", "**consultation-reason-hcd?consultationReasonName=Ablation**").as("loadDates");
    cy.visit(url);
});

When('I search for Practitioner {string}', name => {
    cy.get("#downshift_input_0").click();
    cy.get("#downshift_input_0").type(name);
    cy.get("#downshift_input_0").wait(1000).type('{downarrow}{enter}');
});

And('I choose the reason {string}', reason => {
    cy.get("#consultationReasonName").click();
    cy.get(`[data-cy="${reason}"]`).click();
});

Then('I see the availability', () => {
    cy.wait("@loadDates");
    cy.get(".search-card__rdv.availability-calendar").should('be.visible');
});
