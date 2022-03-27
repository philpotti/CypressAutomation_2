/// <reference types="Cypress" />

describe('My 8th Test Suite', function () {
	it('My 11th Test Case', function () {
		cy.visit(Cypress.env('url') + '/AutomationPractice/');

		//Clicking on a NON-hidden mode

		//cy.get('.mouse-hover-content').invoke('show')
		//cy.contains('Top').click();
		//cy.url().should('include','top')

		//Clicking on a hidden mode ('Mouse Hover' button)
		cy.contains('Top').click({ force: true });
		cy.url().should('include', 'top');
	});
});
