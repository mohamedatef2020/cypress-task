/* eslint-disable no-undef */

const details = require("../testData/details");

const pageModel = {
    selectors: {
        searchBox: "#downshift_input_0",
        menu: "#downshift-simple-menu",
        consultationList: "#consultationReasonName",
        desiredOption: `[data-cy="${details.reason}"]`,
        calender: ".search-card__rdv.availability-calendar",
    },

    actions: {
        clickSearch: () => cy.get(pageModel.selectors.searchBox).click(),
        typePractitionerName: () => cy.get(pageModel.selectors.searchBox).type(details.practitioner),
        choosePractitioner: () => cy.get(pageModel.selectors.searchBox).wait(1000).type('{downarrow}{enter}'),
        openReasonList: () => cy.get(pageModel.selectors.consultationList).click(),
        chooseReason: () => cy.get(pageModel.selectors.desiredOption).click(),
    },

    assertions: {
        assertCalenderIsVisible: () => cy.get(pageModel.selectors.calender).should('be.visible'),
    },
};

module.exports = {
    pageModel,
}