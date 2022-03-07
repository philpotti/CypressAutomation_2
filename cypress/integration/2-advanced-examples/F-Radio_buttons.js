/// <reference types="Cypress" />

describe("My 6th Test Suite", function () {
  it("My 6th Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("[value='radio2']").check().should("be.checked");
  });
});
