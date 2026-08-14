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

const createCheckbox = (isChecked, box, cards) =>{
    const checkBox = document.createElement("input");
    checkBox.classList.add("todo-checkbox");
    checkBox.type = "checkbox";
    checkBox.checked = isChecked;

    checkBox.addEventListener("change", () => {
        const cardIndex = cards.findIndex((card) => card.ID === box.dataset.id);
        if (cardIndex !== -1) {
            cards[cardIndex].isChecked = checkBox.checked;
            localStorage.setItem("cards", JSON.stringify(cards));
        }
    });

    return checkBox;
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
    date.textContent = dueDate ? `Due : ${formateDate(dueDate)}` : "";

    return date;
}

const createInitialDate = (initialDate) => {
    const date = document.createElement("span");
    date.classList.add("todo-created-date");
    initialDate = new Date(initialDate);
    date.textContent = initialDate ? `Created : ${formateDate(initialDate)}` : "";

    return date;
}

const formateDate = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    return  `${yyyy}-${mm}-${dd}T${hh}:${min}`;
}

export default function card(cardData,cards) {
    const box = createBox();
    const cardTitle = createTitle(cardData.title);
    const cardInfo = createInfo(cardData.info);
    const cardCheckBox = createCheckbox(cardData.isChecked, box, cards);
    const dateContainer = createDateContainer(cardData);

    box.append(cardTitle, cardInfo, cardCheckBox ,dateContainer);
    return box;
}