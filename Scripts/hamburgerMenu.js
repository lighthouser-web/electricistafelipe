const hamburgerMenu = document.getElementById("hamburguer-menu-icon");
const navMenu = document.getElementsByTagName("nav")[0];


hamburgerMenu.addEventListener("click", () => {
    if (hamburgerMenu.classList.contains("active")) {
        hamburgerMenu.classList.remove("active");
        navMenu.classList.remove("active");
    } else {
        hamburgerMenu.classList.add("active");
        navMenu.classList.add("active");
    } 
});

function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }

document.querySelectorAll(".nav-li-element").forEach(element => 
    element.addEventListener("click", async () => {
        hamburgerMenu.classList.remove("active");
        navMenu.classList.remove("active");
    }));