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

const createCheckbox = (isChecked) =>{
    const cardCheckBox = document.createElement("input");
    cardCheckBox.classList.add("todo-checkbox");
    cardCheckBox.type = "checkbox";
    cardCheckBox.checked = isChecked;

    cardCheckBox.addEventListener("click",() =>{
        box.classList.toggle("completed", cardCheckBox.checked);
    });
    return cardCheckBox;
}

export default function card(title = "Add title" , info = "Add Info", isChecked = false) {
    const box = createBox();
    const cardTitle = createTitle(title);
    const cardInfo = createInfo(info);
    const cardCheckBox = createCheckbox(isChecked);

    box.append(cardTitle);
    box.append(cardInfo);
    box.append(cardCheckBox);

    return box;
}