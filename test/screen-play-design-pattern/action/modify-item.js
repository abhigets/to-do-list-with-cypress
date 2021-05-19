import {itemList} from "../ui/item-list";

export function markFirstItemAsDone() {
    itemList().get('.toggle').first().click();
}

export function clearCompletedItems() {
    cy.get('.clear-completed').click();
}
