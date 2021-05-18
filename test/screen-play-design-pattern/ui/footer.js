export function defineFooter() {
    cy.get('.info').as('footer');
}

export function footer() {
    return cy.get('@footer');
}
