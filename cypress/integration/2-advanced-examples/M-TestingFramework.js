/// <reference types="Cypress" />

describe('FrameWork example', function () {
	before(function () {
		//Runs only once before all the tests in the block
		cy.fixture('example').then(function (data) {
			this.data = data;
		});
	});

	it('Demo example', function () {
		cy.visit(Cypress.env('url') + '/angularpractice/');
		cy.get("input[name='name']:nth-child(2)").type(this.data.name);
		cy.get('select').select(this.data.gender);
		cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name);
		cy.get("input[name='name']:nth-child(2)").should('have.attr', 'minlength', '2');
		cy.get('#inlineRadio3').should('be.disabled');
	});
});
