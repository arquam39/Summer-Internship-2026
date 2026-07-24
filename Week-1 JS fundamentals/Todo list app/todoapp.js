
let task = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");
let completeAll = document.getElementById("completeAll")
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

addTaskButton.addEventListener("click", addTask)
task.addEventListener("keydown",(event)=>{
    if(event.key == "Enter"){
        addTask()
    }
})

completeAll.addEventListener("click",()=>{
    tasks.forEach((task)=>{
        task.completed = true
    })
    renderTasks()
})

function addTask() {
    if (task.value.trim() === "") return;
    tasks.push({
        text: task.value,
        completed: false
    });
    task.value = "";
    renderTasks();
}