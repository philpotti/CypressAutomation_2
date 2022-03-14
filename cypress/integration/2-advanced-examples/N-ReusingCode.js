/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage'

describe("FrameWork example", function () {
  
    before(function(){
      //Runs only once before all the tests in the block
      cy.fixture('example').then(function(data)
      {
this.data=data
      })
    })

  it("Demo example", function () {
const homePage = new HomePage()

    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEnterpreneaur().should('be.disabled')
    //pause is to debug application
    //cy.pause()
    homePage.getShopTab().click()


    //Check Support folder and in there, the command.js AND also fixtures > example.json
    
    this.data.productName

    this.data.productName.forEach(function(element) {
      cy.selectProduct(element)
    })

  });

});
