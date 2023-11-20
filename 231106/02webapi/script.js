const totoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

const saveToLocal = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};

const addTodo = (e) => {
  e.preventDefault();
  const newDiv = document.querySelector("div");
  newDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = totoInput.value;
  newTodo.classList.add("todo-content");
  newDiv.appendChild(newTodo);
  todoList.appendChild(newTodo);

  const completeButton = document.createElement("button");
  completeButton.innerText = "완료";
  newDiv.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "삭제";
  newDiv.appendChild(deleteButton);

  todoList.appendChild(newDiv);
  totoInput.value = "";

  saveToLocal(totoInput.value);
};

addButton.addEventListener("click", addTodo);
