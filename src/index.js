import "./style.css"
import card from "./card.js"
import homePage from "./homePage.js"
import cardManage from "./cardManage.js"

let cards = [];

const elements = {
    'addTaskBtn' : document.querySelector("#addBtn"),
    'homeBtn' : document.querySelector("#homeBtn"),
    'completBtn' : document.querySelector("#completTask"),
    'dialog' : document.querySelector("#dialog"),
    'todoForm' : document.querySelector("#todoForm"),
    'saveBtn' : document.querySelector("#saveBtn"),
    'cancleBtn' : document.querySelector("#cancelBtn"),
    'todoContent' : document.querySelector("#todoContant")
};

elements.addTaskBtn.addEventListener("click",() => elements.dialog.showModal());
elements.saveBtn.addEventListener("click" , () => {
    const cardData = {
        "title": document.querySelector("#title").value,
        "info" : document.querySelector("#info").value,
        "inputDate" : document.querySelector("#dueDate").value,
        "initialDate" : new Date(),
        "isChecked" : false,
    }

    elements.todoContent.append(card(cardData));
    cards.push(cardData);

    elements.todoForm.reset();
    elements.dialog.close();
})
elements.cancleBtn.addEventListener("click", () => elements.dialog.close());

