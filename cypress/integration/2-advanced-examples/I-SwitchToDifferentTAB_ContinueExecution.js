/// <reference types="Cypress" />

describe("My 9th Test Suite", function () {
  it("My 9th Test Case", function () {
    cy.visit("https://qaclickacademy.com/practice.php");
    
    //Remove attribute on a link that opens another tab to open the link on the same tab
    cy.get('#opentab').invoke('removeAttr','target').click();

    cy.url().should('include', 'rahulshettyacademy') // If it includes 'html str'
    cy.url().should('eq', 'https://www.rahulshettyacademy.com/#/index') // If it is exactly equal to 'html str'

    cy.go('back') //Go back to the previous page

    });
});

/* If NOT TARGET attribute 

cy.get(<locator>).invoke('href')
.then(link=>{
cy.visit(link)
 
})
*/