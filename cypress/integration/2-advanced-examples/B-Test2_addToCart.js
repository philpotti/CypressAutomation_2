/// <reference types="Cypress" />

describe('My 2nd Test Suite', function () {
	it('My 2nd Test Case', function () {
		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
		cy.get('.search-keyword').type('ca');
		cy.wait(2000);

		//Parent child chainings should
		cy.get('.products').as('productLocator'); // declaring .products as a variable

		cy.get('@productLocator')
			.find('.product')
			.each(($el, index, $list) => {
				const textVeg = $el.find('h4.product-name').text();
				if (textVeg.includes('Cashews')) {
					cy.wrap($el).find('button').click();
				}
			});
		cy.get('.cart-icon > img').click();
		cy.contains('PROCEED TO CHECKOUT').click();
		cy.contains('Place Order').click();
	});
});
