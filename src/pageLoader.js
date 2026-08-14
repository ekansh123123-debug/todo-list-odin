import card from "./createCard.js";

export function homePage(todoContent, cards) {
    todoContent.textContent= "";
    cards
      .forEach((checkedCard) => {
        todoContent.append(card(checkedCard, cards));
    });
}

export function showCompleteTask(todoContent, cards) {
    todoContent.textContent= "";
    cards
        .filter((currentCard) => !currentCard.isChecked)
        .forEach((currentCard) => {
            todoContent.append(card(currentCard,cards));
    })
}