import card from "./createCard.js";

function renderCards(todoContent, cards, filterFn) {
    todoContent.textContent = "";
    cards
        .filter(filterFn)
        .forEach((currentCard) => {
            todoContent.append(card(currentCard, cards));
        });
}

export function homePage(todoContent, cards) {
    renderCards(todoContent, cards, () => true);
}

export function showCompleteTask(todoContent, cards) {
    renderCards(todoContent, cards, (currentCard) => currentCard.isChecked);
}

export function showIncompleteTask(todoContent, cards) {
    renderCards(todoContent, cards, (currentCard) => !currentCard.isChecked);
}