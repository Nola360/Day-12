// Set Local Storage - local storage will stay until you manually clear out settings

// localStorage.setItem('name', 'James');
// localStorage.setItem('age', '34');

// // Session storage goes away when browser closes

// sessionStorage.setItem('name', 'James');

// Remove from storage
// localStorage.removeItem('name');

// get from staorage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);


// Clear Local Storasge
// localStorage.clear();
// console.log(name, age);


// Add a task to local storage

document.querySelector('form').addEventListener('submit', function (e) {
  const task = document.getElementById('task').value;

  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');
  // console.log(task);
  e.preventDefault();

})

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function (task) {
  console.log(task);
})

