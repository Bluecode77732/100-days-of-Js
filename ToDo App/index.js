const taskInput = document.querySelector(".task-input input"),
    filters = document.querySelectorAll(".filter span"),
    clearAll = document.querySelector(".clear-btn"),
    taskBox = document.querySelector(".task-box");

let editId,
    isEditTask = false,
    todos = JSON.parse(localStorage.getItem("todo-list"));

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showToDo(btn.id);
    });
});

function showToDo(filter) {
    let liTag = "";
    if(todos) {
        todos.forEach((todo, id) => {
            let completed = todo.status == "completed" ? "checked" : "";
            if(filter == todo.status || filter == "all") {
                liTag += `<li class="task">
                <label for="${id}">
                    <input type="checkbox" onclick="updateStatus(this)" id="${id}" ${completed}>
                    <p class="${completed}">${todo.name}</p>
                </label>
                <div class="settings">
                    <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                    <ul class="task-menu">
                        <li onclick='editTask(${id}, "${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
                        <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
                    </ul>
                </div>
            </li>`;
            }
        });
    }
    taskBox.innerHTML = liTag || `<span>You don't have any task here</span>`;
    let checkTask = taskBox.querySelectorAll(".task");
    !checkTask.length ? clearAll.classList.remove("active") : clearAll.classList.add("active");
    taskBox.offsetHeight >= 300 ? taskBox.classList.add("overflow") : taskBox.classList.remove("overflow");
}

showToDo("all");

function showMenu(selectedTask) {
    let menuDiv = selectedTask.parentElement.lastElementChild;  /* The 'parentElement' returns the parent property of the specified element.*/ /* The 'lastElementChild' property returns the last child element of an element. */ 
    menuDiv.classList.add("show");  /* The 'ClassList' property returns the CSS classnames of an element. */
    document.addEventListener("click", e => {
        if(e.target.tagName != "1" || e.target != selectedTask) {
            menuDiv.classList.remove("show");
        }
    });
}

function updateStatus(selectedTask) {
    let taskName = selectedTask.parentElement.lastElementChild;
    if(selectedTask.checked) {
        taskName.classList.add("checked");
        todos[selectedTask.id].status = "completed";
    } else {
        taskName.classList.remove("checked");
        todos[selectedTask.id].status = "pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(todos));
}

function editTask(taskId, textName) {
    editId = taskId;
    isEditTask = true;
    taskInput.value = textName;
    taskInput.focus();  /* The focus() method gives focus to an element (if it can be focused). */
    taskBox.classList.add("active");
}

