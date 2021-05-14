const images = document.querySelectorAll("img");

let clicked = false;

for (const index of images) {
  index.addEventListener("click", unblur);
}

function unblur(e) {
  e.preventDefault();
  console.log(2);

  let image = e.target;
  let name = image.id;
  name = `./images/${name}.jpg`;
  image.src = name;

  setTimeout(reblur, 2000, image);
}

function reblur(image) {
  let name = image.id;
  name = `./images/${name}blur.jpg`;
  image.src = name;
}
