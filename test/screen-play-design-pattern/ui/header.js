export function header() {
    cy.get('h1').as('header');
    return cy.get('@header')
}
