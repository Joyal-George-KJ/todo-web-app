const input = document.querySelector(".inputs");
const button = document.querySelector("button");

const ulSpace = document.querySelector("ul.todo-holders");

let storeTodo = [];
let fetchArray = [];
let arrayValues;

function renderList() {
    
  const todoDate = new Date();
  ulSpace.innerHTML = "";

  storeTodo = JSON.parse(localStorage.getItem('todos'))
    
  storeTodo == null && (storeTodo = [])

  storeTodo.length != 0
    ? storeTodo.map((val, index) => {
        ulSpace.innerHTML += `<li accesskey="${index}"><p class="text">${val}</p><i>${todoDate.getDate()}/${todoDate.getMonth()}/${todoDate.getFullYear()}</i></li>`;
      })
    : (ulSpace.innerHTML += `<li class="color-grey" accesskey="-1"><p class="text">Example ToDo : List is Empty</p></li>`);
}

function AddFunction() {
  if (input.value.length != 0) {
    storeTodo.push(input.value);
    localStorage.setItem('todos', JSON.stringify(storeTodo));
    console.log(input.value);

    renderList();
  } else {
    alert("Type Something");
  }

  input.value = "";
}

ulSpace.addEventListener("click", (e) => {
  let accessKey = parseInt(e.target.accessKey);
  storeTodo.splice(accessKey, 1);
  localStorage.setItem('todos', JSON.stringify(storeTodo));

  renderList();

  console.log(accessKey);
});

button.addEventListener("click", () => {
  AddFunction();
});

addEventListener("keypress", (e) => {
  e.key === "Enter" && AddFunction()
});

renderList();