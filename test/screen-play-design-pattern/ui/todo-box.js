export function toDoTextBox() {
    return cy.get('.new-todo').as('ToDoBox');
}
