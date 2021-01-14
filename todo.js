const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todolist");

const TODO_LS = "toDo";

let toDo = [];


function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanToDo = toDo.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });

    toDo = cleanToDo;
    saveToDo();
}

function saveToDo() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDo));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDo.length + 1;

    delBtn.innerHTML = "✔️";
    delBtn.addEventListener("click", deleteToDo);

    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todoList.appendChild(li);
    
    const toDoObj = {
        text: text,
        id: newId
    };
    toDo.push(toDoObj);
    saveToDo();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDo(currentValue);
    todoInput.value = "";
}

function loadToDo() {
    const loadToDo = localStorage.getItem(TODO_LS);
    
    if(loadToDo !== null) {
        const parsedToDo = JSON.parse(loadToDo);
        parsedToDo.forEach(function(toDo) {
            paintToDo(toDo);
        });
    } 
}

function init() {
    loadToDo();
    todoForm.addEventListener("submit", handleSubmit);
}

init();