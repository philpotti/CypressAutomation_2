/// <reference types="Cypress" />

describe("My Second Test Suite", function () {
  it("My First Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("[value='radio2']").check().should("be.checked");
  });
});
