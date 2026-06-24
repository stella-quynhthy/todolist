document.addEventListener("DOMContentLoaded", function() {
    const listContainer = document.getElementById("list");
    const addBtn = document.getElementById("addButton");
    const inputField = document.getElementById("addTask");

    function addLi() {
        const task = inputField.value.trim();
        const listItem = document.createElement("li");
        listItem.textContent = task;
        listContainer.appendChild(listItem);
        inputField.value = "";
    }

    addBtn.addEventListener("click", addLi);
    addBtn.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            addLi();
        }
    });

    listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.remove();
        };
    });

    const clearBtn = document.getElementById("clearButton");
    clearBtn.addEventListener("click", function() {
        while (listContainer.firstChild) {
            listContainer.removeChild(listContainer.firstChild);
        }
    });
});