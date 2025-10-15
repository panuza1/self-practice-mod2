const todoInput = document.getElementById("todoInput")
const todoList = document.getElementById("todoList");

function addTodo() {
    const tasktext = todoInput.value.trim();

    if (tasktext === "") {
        alert("pls, enter a task!");
        return;
    }

    // create the list item (li) for the new task
    const li = document.createElement("li");
    li.classList.add("todo-item");

    // create the "delete" btn
    const taskTextNode = document.createTextNode(tasktext)
    li.appendChild(taskTextNode);

    // create the "delete" btn
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        li.remove()
    }
    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    todoInput.value = "";

}

todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTodo();
    }
});