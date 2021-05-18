/// <reference types="cypress" />
import {externalUrls} from "../lib/externalUrls";
import {navigate2ToDoApp} from "../screen-play-design-pattern/action/navigation";
import {header} from "../screen-play-design-pattern/ui/header";
import {defineFooter, footer} from "../screen-play-design-pattern/ui/footer";
import {toDoTextBox} from "../screen-play-design-pattern/ui/toDoBox";

describe('todo App', () => {
    before(() => {
        navigate2ToDoApp();
    });

    context('Header', () => {
        it('Should have a title', () => {
            header()
                .should('be.visible')
                .should('have.text', 'todos');
        });
    });

    context('Footer', () => {
        beforeEach(() => {
            defineFooter();
        });

        it('Should have a tip to use application', () => {
            footer()
                .should('contain', 'Double-click to edit a todo')
                .should('contain', 'Created by petehunt')
                .should('contain', 'Part of TodoMVC');
        });

        it('Should have the correct text and href', () => {
            const links = [
                ['petehunt', externalUrls.petehunt()],
                ['TodoMVC', externalUrls.todoMVC()],
            ];

            links.forEach(([text, href]) => {
                footer()
                    .contains('a', text)
                    .should('have.attr', 'href', href);
            });
        });
    });

    context('todo text box', () => {
        it('Should have a placeholder text', () => {
            toDoTextBox()
                .should('have.attr', 'placeholder', 'What needs to be done?');
        });
    });

});
