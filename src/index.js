import "./style.css";
import createHomePage from "./createHomePage.js";
import dialogManage from "./dialogMange.js";
import showCompleteTask from "./showCompletedTask.js";

let cards = [];

const elements = {
    'addTaskBtn': document.querySelector("#addBtn"),
    'homeBtn': document.querySelector("#homeBtn"),
    'completeBtn': document.querySelector("#completedTask"),
    'saveBtn': document.querySelector("#saveBtn"),
    'cancelBtn': document.querySelector("#cancelBtn"),
    'dialog': document.querySelector("#dialog"),
    'todoForm': document.querySelector("#todoForm"),
    'todoContent': document.querySelector("#todoContant")
};

elements.homeBtn.addEventListener("click", () => createHomePage(elements.todoContent, cards));
elements.addTaskBtn.addEventListener("click", () => elements.dialog.showModal());
elements.completeBtn.addEventListener("click", () => showCompleteTask(elements.todoContent, cards));

elements.saveBtn.addEventListener("click", () => dialogManage(elements, cards));
elements.cancelBtn.addEventListener("click", () => elements.dialog.close());