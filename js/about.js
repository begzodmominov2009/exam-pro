const menutoggle = document.getElementById("toggle");
const menus = document.getElementById("menus");
const close = document.getElementById("close");
const header = document.getElementById("header");





menutoggle.addEventListener("click", () => {
    menus.classList.add("menus-flex")
})

close.addEventListener("click", () => {
    menus.classList.remove("menus-flex")
    menus.classList.add("close-dure")
})

window.addEventListener("scroll", () => {
    if (scrollY > 85) {
        header.classList.add("shrink")
    } else {
        header.classList.remove("shrink")
    }

})
window.addEventListener("scroll", () => {
    menus.classList.remove("menus-flex")
    menus.classList.add("durition")
})
