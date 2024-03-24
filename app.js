function addTodo() {
    var todoInput = document.getElementById('todoInput');
    var todoList = document.getElementById('todoList');

    if (todoInput.value.trim() !== '') {
      var li = document.createElement('li');
      li.className = 'list-group-item';
      li.innerHTML = `
        ${todoInput.value}
        <button class="btn btn-sm btn-success float-right mr-2" onclick="editTodo(this)"><i
        class="fa-solid fa-pen-to-square text-white"></i></button>
        <button class="btn btn-sm btn-danger float-right mr-2" onclick="deleteTodo(this)"><i
        class="fa-solid fa-trash text-white"></i></button>
      `;
      todoList.appendChild(li);
      todoInput.value = '';
    } else {
      alert('Please enter a valid todo.');
    }
  }

  function editTodo(button) {
    var todo = button.parentNode.firstChild;
    var newTodo = prompt('Edit todo:', todo.textContent);
    if (newTodo !== null && newTodo.trim() !== '') {
      todo.textContent = newTodo;
    }
  }

  function deleteTodo(button) {
    button.parentNode.remove();
  }