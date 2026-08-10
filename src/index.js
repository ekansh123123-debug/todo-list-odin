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
    const title = document.querySelector("#title").value;
    const info = document.querySelector("#info").value;
    const isChecked = false;

    elements.todoContent.append(card(title ,info));
    cards.push({title,info,isChecked});

    elements.todoForm.reset();
    elements.dialog.close();
})

elements.cancleBtn.addEventListener("click", () => elements.dialog.close());