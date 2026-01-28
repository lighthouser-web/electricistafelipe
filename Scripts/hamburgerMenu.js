const hamburgerMenu = document.getElementById("hamburguer-menu-icon");
const navMenu = document.getElementsByTagName("nav")[0];
const navLiServicios = document.getElementById("header-li-servicios");


hamburgerMenu.addEventListener("click", () => {
    if (hamburgerMenu.classList.contains("active")) {
        hamburgerMenu.classList.remove("active");
        navMenu.classList.remove("active");
    } else {
        hamburgerMenu.classList.add("active");
        navMenu.classList.add("active");
    } 
});

navLiServicios.addEventListener("click", () => {
    navLiServicios.classList.toggle("active");
})

function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }



