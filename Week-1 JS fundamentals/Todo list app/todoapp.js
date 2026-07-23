
let task = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");

let tasks = [];

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((t, index) => {
        let item = document.createElement("li");
        let text = document.createElement("span");
        text.textContent = t.text;

        if (t.completed) {
            text.classList.add("completed");
        }

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        let statusButton = document.createElement("button");
        statusButton.textContent = t.completed ? "Mark Incomplete" : "Mark Complete";

        deleteButton.addEventListener("click", function () {
            tasks.splice(index, 1);
            renderTasks();
        });

        statusButton.addEventListener("click", function () {
            tasks[index].completed = !tasks[index].completed;
            renderTasks(); 
        });

        item.appendChild(text);
        item.appendChild(deleteButton);
        item.appendChild(statusButton);

        taskList.appendChild(item);
    });
}

addTaskButton.addEventListener("click", function () {
    if (task.value.trim() === "") return;
    tasks.push({
        text: task.value,
        completed: false
    });
    task.value = "";
    renderTasks();
});

