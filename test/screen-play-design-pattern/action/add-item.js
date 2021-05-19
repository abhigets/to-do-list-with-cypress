import {toDoTextBox} from "../ui/todo-box";

export function addItem(itemName) {
    toDoTextBox().type(itemName).type('{enter}');
}
