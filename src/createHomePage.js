import card from "./createCard.js"

export default function homePage(todoContent, cards) {
    todoContent.textContext = "";
    cards
      .forEach((checkedCard) => {
        todoContent.append(card(checkedCard, cards));
    });
}