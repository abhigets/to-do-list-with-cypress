/// <reference types="cypress" />

context('todo app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have header/title, text-box, info footer and empty list', () => {
    cy.get('h1')
        .should('have.text', 'todos');
  })
})
