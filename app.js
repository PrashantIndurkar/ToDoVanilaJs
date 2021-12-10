//Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

todoButton.addEventListener('click', addTodo)

function addTodo(event) {
    // prevent site form reload
    event.preventDefault()

    // Div Todo
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    // Create li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    // buttons check
    const completedButton =document.createElement('button')
    completedButton.innerHTML = `<i class="fas fa-check"></i>`
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)

    // buttons trash
    const trashButton =document.createElement('button')
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    // append to list
    todoList.append(todoDiv)

    todoInput.value = ""
}