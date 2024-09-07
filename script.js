var main = document.getElementsByTagName("main")[0];
var tasks = [];

function loadTasks() {
  var storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
  var allTask = ``;
  for (var i = 0; i < tasks.length; i++) {
    var taskClass = tasks[i].done ? "task done" : "task cancel";
    var doneButtonText = tasks[i].done
      ? `<i class="fa-regular fa-circle-xmark"></i>`
      : `<i class="fa-solid fa-check"></i>`;
    var doneButtonColor = tasks[i].done ? "purple" : "green";

    allTask +=
      `<section class="${taskClass}" id="task-${i}">
      <div class="task-details">
        <h4>` +
      tasks[i].name +
      `</h4>
        <p><span>📅 </span>` +
      tasks[i].date +
      `</p>
      </div>
      <div class="task-actions">
        <button class="delete-button" onclick="deleteTask(${i})"><i class="fa-solid fa-trash"></i></button>
        <button class="done-button" onclick="doneTask(${i})" style="background-color: ${doneButtonColor};">${doneButtonText}</button>
        <button class="edit-button" onclick="editTask(${i})"><i class="fa-solid fa-pen"></i></button>
      </div>
    </section>`;
  }
  main.innerHTML = allTask;
}

function addTask() {
  var taskName = prompt("ادخل اسم المهمه");
  var taskdate = new Date();
  var newTask = { name: taskName, date: taskdate.toDateString() };
  if (taskName != null) tasks.push(newTask);
  saveTasks();
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  displayTasks();
}

function doneTask(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  displayTasks();
}

function editTask(index) {
  var edit = prompt("ادخل التعديل الذي تريده");
  tasks[index].name = edit;
  var date = new Date();
  tasks[index].date = date.toDateString();
  saveTasks();
  displayTasks();
}

loadTasks();
displayTasks();
