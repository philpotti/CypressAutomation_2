/// <reference types="Cypress" />

describe('My 3rd Test Suite', function () {
	it('My 3rd Test Case', function () {
		cy.visit(Cypress.env('url') + '/AutomationPractice/');

		cy.get('#displayed-text').should('be.visible');
		cy.get('#hide-textbox').click();
		cy.get('#displayed-text').should('not.be.visible');
		cy.get('#show-textbox').click();
		cy.get('#displayed-text').should('be.visible');
	});
});
