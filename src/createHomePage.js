import card from "./createCard.js"

export default function homePage(todoContent, cards) {
    cards
      .forEach((checkedCard) => {
        todoContent.append(card(checkedCard, cards));
    });
}