export default function card(titel = "Add titel" , info = "Add Info", isChecked = false) {
    const box = document.createElement("div");
    box.classList.add("todo-card");

    const cardTitel = document.createElement("h2");
    cardTitel.classList.add("todo-title");
    cardTitel.textContent = titel;

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("todo-info");
    cardInfo.textContent = info;

    const cardCheckBox = document.createElement("input");
    cardCheckBox.classList.add("todo-checkbox");
    cardCheckBox.type = "checkbox";
    cardCheckBox.checked = isChecked;

    cardCheckBox.addEventListener("click",() =>{
        box.classList.toggle("completed", cardCheckBox.checked);
    });


    box.append(cardTitel);
    box.append(cardInfo);
    box.append(cardCheckBox);

    return box;
}