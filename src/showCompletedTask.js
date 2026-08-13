import card from "./createCard.js";

export default function showCompleteTask(todoContent, cards) {
    cards.foreach((currentCard) => {
        if(!currentCard.isChecked) todoContent.append(card(currentCard,cards));
    })
}