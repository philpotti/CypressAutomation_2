/// <reference types="Cypress" />

describe("My 8th Test Suite", function () {
  it("My 10th Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

      const text=$el.text()
      if(text.includes('Python')) 
      { //moving to our sibling from our desired element
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
        {
          const priceText=price.text()
          expect(priceText).to.equal('25')
        })
      }

    });

  });

});
