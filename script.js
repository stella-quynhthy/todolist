const listContainer = document.getElementById("list");
const addBtn = document.getElementById("addButton");
const inputField = document.getElementById("addTask");

addBtn.addEventListener("click", () => {
    const task = inputField.value.trim();
    const listItem = document.createElement("li");
    listItem.textContent = task;
    listContainer.appendChild(listItem);
});
