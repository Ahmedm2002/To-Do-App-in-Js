let list = [
  {
    item: "Buy Groceries",
    dueDate: "2023-12-01",
    status: false,
  },
  {
    item: "Complete Assignment",
    dueDate: "2023-12-05",
    status: false,
  },
  {
    item: "Exercise",
    dueDate: "2023-12-10",
    status: false,
  },
  {
    item: "Read a Book",
    dueDate: "2023-12-15",
    status: false,
  },
  {
    item: "Write Code",
    dueDate: "2023-12-20",
    status: false,
  },
  {
    item: "Meet Friend",
    dueDate: "2023-12-25",
    status: false,
  },
];

function handleClick(x) {
  let checkbox = document.querySelector(`#checkbox${x}`);
  let status = document.querySelector(`.status${x}`);
  list[x].status = checkbox.checked ? true : false;
  if (list[x].status == true) {
    checkbox.checked = true;
    status.innerHTML = `<p style="color:green;"> Completed </p>`;
  } else {
    checkbox.checked = false;
    status.innerHTML = `<strike>Completed</strike>`;
  }
}

showList();

function showList() {
  let todoList = document.querySelector(".listContainer");
  let displayTasks = "";

  for (let i = 0; i < list.length; i++) {
    if (list[i].item === "" || list[i].dueDate === "") continue;
    let { item, dueDate, status } = list[i];
    let statusContent = status ? `<p style="color:green;"> Completed </p>` : `<strike>Completed</strike>`;
    displayTasks += `
    <span> <input type="checkbox" id="checkbox${i}" onclick="handleClick(${i})" ${status ? "checked" : ""}></span>
    <span class="item${i}" style="text-align:left;"> ${item} </span> 
    <span class="dueDate"> ${dueDate} </span>
    <div class="status${i}">${statusContent}</div>
    <button id="btnEdit" onclick="editTask(${i})"> Edit </button>
    <button class="btnDelete " onclick="list.splice(${i},1) ; showList();">Delete</button>
    `;
  }
  todoList.innerHTML = displayTasks;
}

function editTask(a) {
  let toBeEditedTask = document.querySelector(`.item${a}`);
  toBeEditedTask.contentEditable = true;
  toBeEditedTask.focus();

  toBeEditedTask.addEventListener("blur", () => {
    list[a].item = this.textContent.trim();
    showList();
  });
}

function addTask() {
  let task = document.querySelector("#inputField").value.trim();
  let todoDate = document.querySelector("#inputDate").value;
  if (task === "" || task === " ") return;
  list.push({ item: task, dueDate: todoDate, status: false });
  document.querySelector("#inputField").value = document.querySelector(
    "#inputDate"
  ).value = "";
  showList();
}
function clearTasks() {
  list = [];
  if(list.length === -1) return;
  showList();
}