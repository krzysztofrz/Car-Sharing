
const header = document.querySelector(".header");

if (window.scrollY > 100) {
    header.classList.add("header-shrink");
} else {
    header.classList.remove("header-shrink");
}

window.addEventListener("scroll", function(e) {
    if (window.scrollY > 100) {
        header.classList.add("header-shrink");
    } else {
        header.classList.remove("header-shrink");
    }
})