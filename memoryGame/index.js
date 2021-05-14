const imgOne = document.getElementById("imageOne");

let clicked = false;

imgOne.addEventListener("click", unblur);

function unblur(e) {
  e.preventDefault();

  if (!clicked) {
    clicked = true;
    imgOne.src = "./images/zero.jpg";
  } else {
    clicked = false;
    imgOne.src = "./images/zeroblur.jpg";
  }
}
