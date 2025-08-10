const barbekyu = document.getElementById("barbekyu")
const barbekyu2 = document.getElementById("barbekyu2")
const barbekyu3 = document.getElementById("barbekyu3")
const view = document.getElementById("view")
const view2 = document.getElementById("view2")
const menutoggle = document.getElementById("toggle");
const menus = document.getElementById("menus");
const close = document.getElementById("close");
const header = document.getElementById("header");




barbekyu.classList.add("barbekyu-hide")
barbekyu2.classList.add("barbekyu-hide")
barbekyu3.classList.add("barbekyu-hide")
view2.classList.add("view2-hide")

view.addEventListener("click", () => {
    barbekyu.classList.remove("barbekyu-hide")
    barbekyu2.classList.remove("barbekyu-hide")
    barbekyu3.classList.remove("barbekyu-hide")
    view.classList.add("view2-hide")
    view2.classList.remove("view2-hide")
})
view2.addEventListener("click", () => {
    barbekyu.classList.add("barbekyu-hide")
    barbekyu2.classList.add("barbekyu-hide")
    barbekyu3.classList.add("barbekyu-hide")
    view.classList.remove("view2-hide")
    view2.classList.add("view2-hide")
})
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

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,
        },
    },
});
