// get values from html
const btnToggle = document.getElementById("btnToggle");
const header = document.querySelector("header");
const addForm = document.getElementById("addForm");
const products = document.getElementById("products");
const results = document.querySelectorAll(".results");
const newProduct = document.getElementById("newProduct");

// variable initialization
let clicked = false;

// add an event listener of click to change the theme to dark
btnToggle.addEventListener("click", theme);
addForm.addEventListener("submit", addProduct);
products.addEventListener("click", removeItem);

// function theme to change a theme color
function theme(e) {
  document.body.classList.toggle("dark", e.target.btnToggle);
  header.classList.toggle("dark");
  products.classList.toggle('dark');
  
  if(!clicked) {
    clicked = true;
    btnToggle.style.backgroundImage = 'url("./images/icon-sun.svg")';
  }else {
    clicked = false;
    btnToggle.style.backgroundImage = 'url("./images/icon-moon.svg")';
  }
  
}

function addProduct(e) {
  e.preventDefault();

  // create a new li element
  let li = document.createElement("li");
  li.className = "results";
  li.draggable = 'true';
  

  let span = document.createElement("span");
  span.textContent = newProduct.value;
  li.appendChild(span);

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn-result btn__delete";

  deleteBtn.appendChild(document.createTextNode("x"));
  li.appendChild(deleteBtn);

  let editBtn = document.createElement("button");
  editBtn.className = "btn-result btn__edit save";

  editBtn.appendChild(document.createTextNode("edit"));
  li.appendChild(editBtn);

  li.addEventListener('dragstart', () => {
    li.classList.add('dragging');
  });

  li.addEventListener('dragend', () => {
    li.classList.remove('dragging');
  })

  if (newProduct.value === "") {
    alert("prinxi spasu em branku");
  } else {
    products.appendChild(li);
  }
}

// function remove
function removeItem(e) {
  if (e.target.tagName === "BUTTON") {
    const button = e.target;
    const results = button.parentNode;
    const products = results.parentNode;

    // se konteudu di textu for igual a x - remover
    if (button.textContent === "x") {
      // remove li 
      products.removeChild(results);

    } else if (button.textContent === "edit") { // edita produtu
      const span = results.firstElementChild;
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.textContent;
      results.insertBefore(input, span);
      results.removeChild(span);
      button.textContent = "save";
    } else if (button.textContent === "save") {
      const input = results.firstElementChild;
      const span = document.createElement("span");
      span.textContent = input.value;
      results.insertBefore(span, input);
      results.removeChild(input);
      button.textContent = "edit";
    }
  }
}


// draggable function 

results.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  })
});

products.addEventListener('dragover', (e) => {
  e.preventDefault();
  const draggable = document.querySelector('.dragging');
  const afterElement = getDragElement(e.clientY);
  if (!afterElement) {
    products.appendChild(draggable);
  }else {
    afterElement.before(draggable)
  }
  console.log(afterElement);
 
  
});


function getDragElement(y) {
  const dragElements = [...products.querySelectorAll('.results:not(.dragging)')];
  return dragElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    console.log(box);

    if (offset > 0 && offset > closest.offset) {
      return {offset: offset, element: child}
      
    }else {
      return closest;
    }
  }, {offset: Number.NEGATIVE_INFINITY}).element;
}
