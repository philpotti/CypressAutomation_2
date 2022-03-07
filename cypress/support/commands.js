// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
Cypress.Commands.add('selectProduct', (productoName) => { 
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes('Blackberry'))
        {
          cy.get('div button.btn-info').eq(index).click()
        }
      })
})

// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
