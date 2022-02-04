/// <reference types="Cypress" />

describe("My Second Test Suite", function () {
  it("My First Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#dropdown-class-example")
      .select("option2")
      .should("have.value", "option2");
  });
});
