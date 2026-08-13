import card from "./createCard.js"
import homePage from "./createHomePage.js";

export default function (elements, cards) {
    const cardData = {
        "ID" : crypto.randomUUID(),
        "title": document.querySelector("#title").value,
        "info": document.querySelector("#info").value,
        "inputDate": new Date(document.querySelector("#dueDate").value),
        "initialDate": new Date(),
        "isChecked": false
    }

    cards.push(cardData);

    elements.todoForm.reset();
    elements.dialog.close();
    homePage(elements.todoContent, card);
}