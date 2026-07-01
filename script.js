document.addEventListener("DOMContentLoaded", function() {
    const listContainer = document.getElementById("list");
    const addBtn = document.getElementById("addButton");
    const inputField = document.getElementById("addTask");

    function addLi() {
        if (inputField.value === "") {
            alert  ("Please enter a task into the text box")
        } else {
            const task = inputField.value.trim();
            const listItem = document.createElement("li");
            listItem.textContent = task;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.addEventListener("click", ()=> {
                listItem.remove();
                })
            listContainer.appendChild(listItem);
            listItem.appendChild(removeBtn);
            inputField.value = "";
        }
    }

    addBtn.addEventListener("click", () => {
        addLi();
        /*const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", ()=> {
            listItem.remove();
            })*/
});
    addBtn.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            addLi();
        }
    });

    /*listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.remove();
        };
    });*/

    const clearBtn = document.getElementById("clearButton");
    clearBtn.addEventListener("click", function() {
        while (listContainer.firstChild) {
            listContainer.removeChild(listContainer.firstChild);
        }
    });
});