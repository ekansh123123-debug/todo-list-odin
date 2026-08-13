import card from "./createCard.js";

export default function showCompleteTask(todoContent, cards) {
    todoContent.textContext = "";
    cards
        .filter((currentCard) => !currentCard.isChecked)
        .forEach((currentCard) => {
            todoContent.append(card(currentCard,cards));
    })
}