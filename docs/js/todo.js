const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');
let toDos = [];

function saveTodos(){
    localStorage.setItem('todo-list', JSON.stringify(toDos));
}


function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function addTodo(item){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const a = document.createElement('a');
    
    span.innerText = `${item.text} `;
    li.id = item.id;
    a.innerText = '❌';
    li.appendChild(span);
    li.appendChild(a);
    todoList.appendChild(li);
    a.addEventListener("click", deleteTodo);

}

function handleTodo(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    if (newTodo){
        const newTodoObj = {
            id: Date.now(),
            text: newTodo
        }
        addTodo(newTodoObj);
        toDos.push(newTodoObj);
        console.log(toDos);
        saveTodos();
        todoInput.value='';
    }
    todoInput.focus();

}

todoForm.addEventListener("submit", handleTodo);

function init(){
    {

        const savedTodos = localStorage.getItem("todo-list");
    
        if (savedTodos !== null) {
            const parsedTodos = JSON.parse(savedTodos);
            toDos = parsedTodos;
            parsedTodos.forEach(addTodo);
        }
    }
}

init();