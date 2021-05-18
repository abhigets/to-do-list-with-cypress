export function defineInfoPane() {
    cy.get('.info').as('infoPane');
}

export function infoPane() {
    return cy.get('@infoPane');
}
