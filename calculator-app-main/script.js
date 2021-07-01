const getStylesheet = document.querySelector('link[href="#"]');
const themeRadioBtns = document.querySelectorAll('.theme-radio');
const numbers = document.querySelectorAll('[data-number]');

numbers.addEventListener('click', calcInit)

function calcInit() {
  console.log(1);
}

const changeTheme = (event) => {
  const target = event.target;
  if (target.value === "1") {
    getStylesheet.setAttribute("href", "./dist/css/theme1.min.css");
    localStorage.setItem("preference", 1);
    console.log(localStorage.getItem("preference"));
  } else if (target.value === "2") {
    getStylesheet.setAttribute("href", "./dist/css/theme2.min.css");
    localStorage.setItem("preference", 2);
    console.log(localStorage.getItem("preference"));
  } else {
    getStylesheet.setAttribute("href", "./dist/css/theme3.min.css");
    localStorage.setItem("preference", 3);
    console.log(localStorage.getItem("preference"));
  }
};

for (const themeRadio of themeRadioBtns) {
  themeRadio.addEventListener("change", changeTheme);
}

// Storing the state of the theme locally
const prevserveUserPreferance = () => {
  const preference = localStorage.getItem("preference");
  getStylesheet.setAttribute("href", `./dist/css/theme${preference}.min.css`);
  themeRadioBtns[preference - 1].checked = true;
};

window.addEventListener("load", prevserveUserPreferance);