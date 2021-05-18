/// <reference types="cypress" />
import {navigate2ToDoApp} from "../screen-play-design-pattern/action/navigation";
import {toDoTextBox} from "../screen-play-design-pattern/ui/todo-box";
import {itemList} from "../screen-play-design-pattern/ui/item-list";
import {footer} from "../screen-play-design-pattern/ui/footer";

function addItem(itemName) {
    toDoTextBox().type(itemName).type('{enter}');
}


describe('Add item', () => {
    before(() => {
        navigate2ToDoApp();
    });

    context('On adding a new item', () => {
        it('Should have a item in list and footer', () => {
            addItem('milk')
            itemList()
                .should('be.visible')
                .should('have.text', 'milk');
            footer()
                .should('be.visible')
        });
    });

});
