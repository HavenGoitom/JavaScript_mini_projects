let todos = [];

function renderTodoList() {
    let todoListHtml = '';
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const html = `
        <div class="todo">${todo.name}</div>
        <div class="todo-date">${todo.date}</div>
        <button class="todos-delete" onclick="
            todos.splice(${i}, 1);
            renderTodoList();
        ">Delete</button>`;
        todoListHtml += html;
    }
    document.querySelector('.js-name-output').innerHTML = todoListHtml;
}

function AddTodos() {
    let nameInput = document.querySelector('.js-name-input');
    let dateInput = document.querySelector('.js-date-input');
    let name = nameInput.value.trim();
    let date = dateInput.value;

    if (name && date) {
        todos.push({ name: name, date: date });
        renderTodoList();
        nameInput.value = '';
        dateInput.value = '';
    }
}
