import card from "./createCard.js"
import {homePage} from "./pageLoader.js";

const getCardData = () => {
    return {
            "ID" : crypto.randomUUID(),
            "title": document.querySelector("#title").value,
            "info": document.querySelector("#info").value,
            "inputDate": new Date(document.querySelector("#dueDate").value),
            "initialDate": new Date(),
            "isChecked": false,
            }
}

export default function (elements, cards) {
    const cardData = getCardData();
    cards.push(cardData);
    elements.todoForm.reset();
    elements.dialog.close();
    homePage(elements.todoContent, cards);
    localStorage.setItem("cards", JSON.stringify(cards));
}