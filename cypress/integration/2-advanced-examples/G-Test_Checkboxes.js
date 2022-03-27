/// <reference types="Cypress" />

describe('My 7th Test Suite', function () {
	it('My 7th Test Case', function () {
		cy.visit(Cypress.env('url') + '/AutomationPractice/');

		cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
		cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
		cy.get('input[type="checkbox"]').check(['option2', 'option3']);
	});
});
