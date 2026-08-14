import "./style.css";
import dialogManage from "./dialogMange.js";
import { homePage, showCompleteTask , showIncompleteTask } from "./pageLoader.js";
let cards = JSON.parse(localStorage.getItem("cards")) || [];

const elements = {
    "addTaskBtn": document.querySelector("#addBtn"),
    "homeBtn": document.querySelector("#homeBtn"),
    "completeBtn": document.querySelector("#completedTask"),
    "saveBtn": document.querySelector("#saveBtn"),
    "cancelBtn": document.querySelector("#cancelBtn"),
    "dialog": document.querySelector("#dialog"),
    "todoForm": document.querySelector("#todoForm"),
    "todoContent": document.querySelector("#todoContant"),
    "incompleteBtn": document.querySelector("#incompleteTask")
};

elements.homeBtn.addEventListener("click", () => homePage(elements.todoContent, cards));
elements.addTaskBtn.addEventListener("click", () => elements.dialog.showModal());
elements.completeBtn.addEventListener("click", () => showCompleteTask(elements.todoContent, cards));
elements.incompleteBtn.addEventListener("click", () => showIncompleteTask(elements.todoContent, cards));

elements.saveBtn.addEventListener("click", () => dialogManage(elements, cards));
elements.cancelBtn.addEventListener("click", () => { elements.dialog.reset(); elements.dialog.close(); });

homePage(elements.todoContent, cards);