/// <reference types="cypress" />
import {externalUrls} from "../lib/external-urls";
import {navigate2ToDoApp} from "../screen-play-design-pattern/action/navigation";
import {header} from "../screen-play-design-pattern/ui/header";
import {infoPane} from "../screen-play-design-pattern/ui/info-pane";
import {toDoTextBox} from "../screen-play-design-pattern/ui/todo-box";
import {footer} from "../screen-play-design-pattern/ui/footer";
import {itemList} from "../screen-play-design-pattern/ui/item-list";

describe('todos App', () => {
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

    context('Info pane', () => {
        it('Should have a tip to use application', () => {
            infoPane()
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
                infoPane()
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

    context('Footer', () => {
        it('Should not exist', () => {
            footer()
                .should('not.exist');
        });
    });

    context('Item list', () => {
        it('Should not exist', () => {
            itemList()
                .should('not.exist');
        });
    });

});
