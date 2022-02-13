/// <reference types="Cypress" />

describe("My 9th Test Suite", function () {
  it("My 9th Test Case", function () {
    cy.visit("https://qaclickacademy.com/practice.php");

    cy.get('#opentab').invoke('removeAttr','target').click();
    });
});

/* If NOT TARGET attribute 

cy.get(<locator>).invoke('href')
.then(link=>{
cy.visit(link)
 
})
*/