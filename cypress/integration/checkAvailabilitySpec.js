/* eslint-disable no-undef */
/// <reference types="cypress" />

const { pageModel } = require("./model");

describe('Check availability calender of a practitioner', () => {
    beforeEach(() => {
      cy.intercept("GET", "**consultation-reason-hcd?consultationReasonName=Ablation**").as("loadDates");

      cy.visit('/');
    });
  
    it('[TC001] Should check that the availability calender is visible', () => {
      pageModel.actions.clickSearch();
      pageModel.actions.typePractitionerName();
      pageModel.actions.choosePractitioner();
      pageModel.actions.openReasonList();
      pageModel.actions.chooseReason();

      cy.wait("@loadDates")
      pageModel.assertions.assertCalenderIsVisible();
    });
  });
