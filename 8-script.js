const hamburger = document.getElementById("hamburger");
const navMobile = document.getElementById("nav-mobile");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMobile.classList.toggle("show");
});
