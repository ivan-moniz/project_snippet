// get values from html
const btnToggle = document.getElementById("btnToggle");
const header = document.querySelector("header");
const addForm = document.getElementById("addForm");
const products = document.getElementById("products");

// add an event listener of click to change the theme to dark
btnToggle.addEventListener("click", theme);
addForm.addEventListener("submit", addProduct);
products.addEventListener('click', removeItem);

// function theme to change a theme color
function theme(e) {
  document.body.classList.toggle("dark", e.target.btnToggle);
  header.classList.toggle("dark");
}

function addProduct(e) {
  e.preventDefault();

  // get the value from input
  let newProduct = document.getElementById("newProduct").value.trim();

  // create a new li element
  let li = document.createElement("li");
  li.className = "results";

  // append the li value from new Product node vaule
  li.appendChild(document.createTextNode(newProduct));

  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn-result btn__delete';

  deleteBtn.appendChild(document.createTextNode('x'));
  li.appendChild(deleteBtn);

  let editBtn = document.createElement('button');
  editBtn.className = 'btn-result btn__edit';

  editBtn.appendChild(document.createTextNode('edit'));
  li.appendChild(editBtn);

  products.appendChild(li);

}


// function remove
function removeItem(e) {
  if(e.target.classList.contains('btn__delete')) {
    if(confirm('Are you sure?')) {
      let li = e.target.parentElement;
      products.removeChild(li);
    }
  }else if(e.target.classList.contains('btn__edit')) {
    console.log(1);
  }
}