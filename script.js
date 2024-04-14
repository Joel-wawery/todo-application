const newTaskInput = document.getElementById("newTask");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
  const newTaskText = newTaskInput.value.trim(); // Trim whitespace
  if (newTaskText) {
    const newTaskItem = document.createElement("li");
    newTaskItem.classList.add("task-item");

    const taskText = document.createElement("span");
    taskText.innerText = newTaskText;
    taskText.classList.add("task-text");

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function() {
      taskList.removeChild(newTaskItem);
    });

    newTaskItem.appendChild(taskText);
    newTaskItem.appendChild(deleteButton);
    taskList.appendChild(newTaskItem);

    newTaskInput.value = ""; // Clear input field after adding task
  }
}

addButton.addEventListener("click", addTask);

// Optional: Allow adding tasks by pressing Enter in the input field
newTaskInput
