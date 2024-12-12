import'@4tw/cypress-drag-drop'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 /*Cypress.Commands.add('login', (email, password) => {
    cy.get('#user_login').type(email)
        cy.get('#user_pass').type(password)
        cy.get('#wp-submit').click()
  })*/
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
Cypress.Commands.add("move", (pick, drop) => {
  cy.get(`[name="space${pick}"]`).should('have.attr', 'src', 'you1.gif').click()
  cy.get(`[name="space${drop}"]`).click().should('have.attr', 'src', 'you1.gif')
  cy.wait(3000)
});

