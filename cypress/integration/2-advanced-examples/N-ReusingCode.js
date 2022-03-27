/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage';
import ProductPage from '../../support/pageObjects/ProductPage';

describe('FrameWork example', function () {
	before(function () {
		//Runs only once before all the tests in the block
		cy.fixture('example').then(function (data) {
			this.data = data;
		});
	});

	it('Demo example', function () {
		const homePage = new HomePage();
		const productPage = new ProductPage();

		cy.visit(Cypress.env('url') + '/angularpractice/');
		homePage.getEditBox().type(this.data.name);
		homePage.getGender().select(this.data.gender);
		homePage.getTwoWayDataBinding().should('have.value', this.data.name);
		homePage.getEditBox().should('have.attr', 'minlength', '2');
		homePage.getEntrepreneaur().should('be.disabled');
		//pause is to debug application
		//cy.pause()
		homePage.getShopTab().click();

		//Check Support folder and in there, the command.js AND also fixtures > example.json

		this.data.productName;
		//Look this up in Folder > fixtures / example.json and in support / commands.js
		this.data.productName.forEach(function (element) {
			cy.selectProduct(element);
		});
		productPage.checkOutButton().click();
		var sum = 0;
		cy.get('tr td:nth-child(4) strong')
			.each(($el, index, $list) => {
				const amount = $el.text();
				var result = amount.split(' ');
				result = result[1].trim();
				sum = Number(sum) + Number(result);
			})
			.then(function () {
				cy.log(sum);
			});
		cy.get('h3 strong').then(function (element) {
			const amount = element.text();
			var result = amount.split(' ');
			var total = result[1].trim();
			expect(Number(total)).to.equal(Number(sum));
		});

		cy.contains('Checkout').click();
		cy.get('#country').type('India');
		cy.get('.suggestions > ul > li > a').click();
		cy.get("input[id='checkbox2']").click({ force: true });
		cy.get('input.btn.btn-success.btn-lg').click();
		//cy.get('div.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).');
		cy.get('.alert').then(function (element) {
			const actualText = element.text();
			expect(actualText.includes('Success')).to.be.true;
		});
	});
});
