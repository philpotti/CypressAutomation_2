/// <reference types="Cypress" />

describe('My 1st Test Suite', function () {
	it('My 1st Test Case', function () {
		cy.visit(Cypress.env('url') + '/seleniumPractise/#/');
		cy.get('.search-keyword').type('ca');
		cy.wait(2000);
		cy.get('.product').should('have.length', 5);
		cy.get('.product:visible').should('have.length', 4);
		//Parent child chainings should
		cy.get('.products').as('productLocator'); // declaring .products as a variable
		cy.get('@productLocator').find('.product').should('have.length', 4);
		cy.get('@productLocator')
			.find('.product')
			.eq(2)
			.contains('ADD TO CART')
			.click()
			.then(function () {
				console.log('sf');
			});

		cy.get('@productLocator')
			.find('.product')
			.each(($el, index, $list) => {
				const textVeg = $el.find('h4.product-name').text();
				if (textVeg.includes('Cashews')) {
					cy.wrap($el).find('button').click();
				}
			});
		//assert if logo text is currently displayed
		cy.get('.brand').should('have.text', 'GREENKART');

		//Grabbing Logo text
		cy.get('.brand.greenLogo').then(function (logoelement) {
			cy.log(logoelement.text());
		});
	});
});
