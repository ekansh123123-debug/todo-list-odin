import card from "./createCard.js"

export default function homePage(todoContent, cards) {
    cards.foreach((currentCard) => {
        if(currentCard.isChecked) todoContent.append(card(currentCard,cards));
    });
}