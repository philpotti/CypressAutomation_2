/// <reference types="Cypress" />

describe('My 6th Test Suite', function () {
	it('My 6th Test Case', function () {
		cy.visit(Cypress.env('url') + '/AutomationPractice/');

		cy.get("[value='radio2']").check().should('be.checked');
	});
});
