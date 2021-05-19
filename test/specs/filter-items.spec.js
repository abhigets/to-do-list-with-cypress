/// <reference types="cypress" />
import {navigate2ToDoApp} from "../screen-play-design-pattern/action/navigation";
import {itemList} from "../screen-play-design-pattern/ui/item-list";
import {addItem} from "../screen-play-design-pattern/action/add-item";
import {filterBy} from "../screen-play-design-pattern/action/filter-by";
import {markFirstItemAsDone} from "../screen-play-design-pattern/action/modify-item";


describe('Filter', () => {
    before(() => {
        navigate2ToDoApp();
    });

    context('On adding 3 items one completed and two active', () => {
        beforeEach(() => {
            addItem('milk')
            addItem('cheese')
            addItem('butter')
            markFirstItemAsDone();
        });

        afterEach(() => {
            localStorage.clear();
        });

        it('Should show 2 item on Active filter and 1 item on Completed filter', () => {
            filterBy('Active');
            itemList().should('have.length', 2)
            filterBy('Completed');
            itemList().should('have.length', 1)
        });
    });

});
