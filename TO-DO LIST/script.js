let taskInput = document.querySelector("#taskInput");
let button = document.querySelector("#addTaskButton");
button.addEventListener("click", addTask);

function addTask(){
    let task = taskInput.value.trim();
    if (task !== "") {
        let taskList = document.querySelector("#taskList");
        let listItem = document.createElement("li");
        listItem.textContent = task;
        taskList.appendChild(listItem);
        taskInput.value = "";

        //adding delete button to each task
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        listItem.appendChild(deleteButton);

        deleteButton.addEventListener("click", function() {
            taskList.removeChild(listItem);


        });


    }}