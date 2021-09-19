//SELECTORS
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filterTodo');
//TODO LOCAL STORAGE
function saveInLocalStorage() {
  window.localStorage.setItem('', JSON.stringify(tareas))
}
//EVENT LISTENERS
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)
//filterOption.addEventListener("click", filterTodo)
//FUNCTIONS
function addTodo(event) {
  event.preventDefault();
  //todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //todo LI
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo_item');
  todoDiv.appendChild(newTodo);
  if (todoInput.value === "") {
  }
  //CHECK MARK BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete_btn')
  todoDiv.appendChild(completedButton);
  //DELETE BUTTON
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add('delete_btn')
  todoDiv.appendChild(deleteButton);
  //UPDATE-EDIT TASK
  const editButton = document.createElement('button');
  editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
  editButton.classList.add('edit_btn')
  todoDiv.appendChild(editButton);
  //APPEND TO ACTUAL LIST
  todoList.appendChild(todoDiv);
  //CLEAR todo input VALUE
  todoInput.value = ""
}

//DELETE & CHECK
function deleteCheck(e) {
  console.log("Hello")
  const item = e.target;
  //DELETE ITEM
  if (item.classList[0] === "delete_btn") {
    console.log(1) //PARA VER QUE SI ENTRA BIEN
    const todo = item.parentElement;
    //ANIMATION TRANSITION
    todo.classList.add("fall")
    todo.addEventListener('transitionend', function () {
      todo.remove()
    })
  }
  //COMPLETE ITEM
  if (item.classList[0] === "complete_btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completedItem")
  }
  //EDIT ITEM
  if (item.classList[0] === "edit_btn") {
    const todo = item.parentElement;
    console.log(todo)
    //const probando = document.querySelector('.todo_input');
    //probando.text("Hello")

    //todo.classList.toggle("completedItem")
  }
}
//FILTERING TASKS ACCORDING THE OPTION
function filterTodo(e) {
  const todos = todoList.childNodes;
  for (let i = 1; i < todos.length; i++) {
    switch (e.target.value) {
      case "all":
        todos[i].style.display = "flex";
        break;
      case "completed":
        if (todos[i].classList.contains('completedItem')) {
          todos[i].style.display = "flex";
        } else {
          todos[i].style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todos[i].classList.contains('completedItem')) {
          todos[i].style.display = "flex";
        } else {
          todos[i].style.display = "none";
        }
        break;
    }
  }
}