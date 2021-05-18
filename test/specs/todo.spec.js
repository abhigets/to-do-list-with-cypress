/// <reference types="cypress" />
const urls = {
    toDoApp: "/"
};

const externalUrls = {
    petehunt: () => 'http://github.com/petehunt/',
    todoMVC: () => 'http://todomvc.com',
};

describe('todo App', () => {
    before(() => {
        cy.visit(urls.toDoApp);
    });

    context('Header', () => {
        it('Should have a title', () => {
            cy.get('h1').as('header');
            cy.get('@header').should('be.visible');
            cy.get('@header').should('have.text', 'todos')
        });
    });

    context('Footer', () => {
        beforeEach(() => {
            cy.get('.info').as('footer');
        });

        it('Should have a tip to use application', () => {
            cy.get('@footer')
                .should('contain', 'Double-click to edit a todo')
                .should('contain', 'Created by petehunt')
                .should('contain', 'Part of TodoMVC')
        });

        it('Should have the correct text and href', () => {
            const links = [
                ['petehunt', externalUrls.petehunt()],
                ['TodoMVC', externalUrls.todoMVC()],
            ];

            links.forEach(([text, href]) => {
                cy.get('@footer')
                    .contains('a', text)
                    .should('have.attr', 'href', href)
            });
        });
    });
    
});
