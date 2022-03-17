/// <reference types="Cypress" />

describe('My 4th Test Suite', function () {
	it('My 4th Test Case', function () {
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

		cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');
	});
});
