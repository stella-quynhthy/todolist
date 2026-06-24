document.addEventListener("DOMContentLoaded", function() {
    const listContainer = document.getElementById("list");
    const addBtn = document.getElementById("addButton");
    const inputField = document.getElementById("addTask");

    function addLi() {
        const task = inputField.value.trim();
        const listItem = document.createElement("li");
        listItem.textContent = task;
        listContainer.appendChild(listItem);
    }

    addBtn.addEventListener("click", addLi);
    addBtn.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            addLi();
        }
    });
});