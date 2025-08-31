let todos = []
function AddTodos(){
    let inputElement = document.querySelector('.js-name-input');
    let todo = inputElement.value;
    todos.push(String(todo)); 
    todo_result = document.querySelector('.js-name-output');
    todo_result.innerHTML = "";
    for(i=0; i<todos.length; i++){
        todo_result.innerHTML += todos[i] + "<br>"
    }
}