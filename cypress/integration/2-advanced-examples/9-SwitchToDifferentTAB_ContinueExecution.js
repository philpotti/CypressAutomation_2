/// <reference types="Cypress" />

describe("My 9th Test Suite", function () {
  it("My 9th Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('#opentab').first().invoke('removeAttr','target').click();
    });
});
