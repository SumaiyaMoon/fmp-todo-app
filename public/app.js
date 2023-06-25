import { database, getDatabase, ref, set, push, onValue } from "./firebaseConfig.js";

var todoApp = {
  list: document.getElementById("list"),
  todoInput: document.getElementById("todoInput"),

  addTodo: function() {
    var listMyTodo = this.todoInput.value;

    var newTodoRef = push(ref(database, 'todos'));
    set(newTodoRef, listMyTodo);
  
    this.list.innerHTML += `
      <li id="${newTodoRef.key}">
        <span class="m-2 p-1">${listMyTodo}</span>
        <button class="btn btn-outline-info m-2 p-1" onClick="edit(this.parentNode);">Edit</button>
        <button class="btn btn-outline-info m-2 p-1" onClick="deleteItem(this.parentNode);">Delete</button>
      </li>
    `;
    this.todoInput.value = "";
  },
};

window.addTodo = function() {
  todoApp.addTodo();
};

window.deleteAll = function() {
  var list = document.getElementById("list");
  list.innerHTML = "";

///delete all in db
  var todosRef = ref(database, 'todos');
  set(todosRef, null);
};

window.edit = function(todoItem) {
  var span = todoItem.querySelector("span");
  var currentText = span.innerText;
  var editText = prompt("Edit Todo", currentText);
  if (editText !== null && editText.trim() !== "") {
    span.innerText = editText;

    ////Taking id
    var todoId = todoItem.id;
//edit in db///
    var todoRef = ref(database, 'todos/' + todoId);
    set(todoRef, editText);
  }
};

window.deleteItem = function(todoItem) {
  todoItem.remove();

 //Taking Id
  var todoId = todoItem.id;

  //deleting from db
  var todoRef = ref(database, 'todos/' + todoId);
  set(todoRef, null);
};
