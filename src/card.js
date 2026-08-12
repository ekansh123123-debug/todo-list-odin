const createBox = () => {
    const box = document.createElement("div");
    box.classList.add("todo-card");
    return box;
}

const createTitle = (title) =>{
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("todo-title");
    cardTitle.textContent = title;
    return cardTitle;
}

const createInfo = (info) => {
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("todo-info");
    cardInfo.textContent = info;
    return cardInfo;
}

const createCheckbox = (isChecked, box) =>{
    const cardCheckBox = document.createElement("input");
    cardCheckBox.classList.add("todo-checkbox");
    cardCheckBox.type = "checkbox";
    cardCheckBox.checked = isChecked;

    cardCheckBox.addEventListener("click",() =>{
        box.classList.toggle("completed", cardCheckBox.checked);
    });

    return cardCheckBox;
}

const createDateContainer = (cardData) => {
    const dueDate = createDueDate(cardData.inputDate);
    const initialDate = createInitialDate(cardData.initialDate);
    const container = document.createElement("div");
    container.classList.add("todo-dates");
    if (cardData.initialDate) container.append(initialDate);
    if (cardData.inputDate) container.append(dueDate);

    return container;
}

const createDueDate = (dueDate) =>{
    const date = document.createElement("span");
    date.classList.add("todo-due-date");
    date.textContent = dueDate ? `Due : ${dueDate}` : "";

    return date;
}

const createInitialDate = (initialDate) => {
    const date = document.createElement("span");
    date.classList.add("todo-create-date");
    initialDate = new Date(initialDate);
    date.textContent = initialDate ? `Created : ${initialDate}` : "";

    return date;
}

export default function card(cardData) {
    const box = createBox();
    const cardTitle = createTitle(cardData.title);
    const cardInfo = createInfo(cardData.info);
    const cardCheckBox = createCheckbox(cardData.isChecked, box);
    const dateContainer = createDateContainer(cardData);

    box.append(cardTitle, cardInfo, cardCheckBox ,dateContainer);
    return box;
}