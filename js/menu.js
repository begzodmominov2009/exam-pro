const menutoggle = document.getElementById("toggle");
const menus = document.getElementById("menus");
const close = document.getElementById("close");
const header = document.getElementById("header");
const alla = document.getElementById("alla")
const kebabs = document.getElementById("kebabs")
const pides = document.getElementById("pides")
const burgers = document.getElementById("burgers")
const sides = document.getElementById("sides")
const others = document.getElementById("others")
const drinks = document.getElementById("drinks")
const dessetrs = document.getElementById("dessetrs")
const meal = document.getElementById("meal")
const all2 = document.getElementById("all2")
const shashlik = document.getElementById("shashlik")
const pidess = document.getElementById("pidess")
const gamburger = document.getElementById("gamburger")
const other_dishes = document.getElementById("other-dishes")
const sidess = document.getElementById("sidess")
const cola = document.getElementById("cola")
const dissertss = document.getElementById("dissertss")
const meal2 = document.getElementById("meal2")
const text = document.getElementById("text")
const text2 = document.getElementById("text2")
const text3 = document.getElementById("text3")
const read = document.getElementById("read")
const read2 = document.getElementById("read2")


shashlik.classList.add("shashlik-hide")
pidess.classList.add("pidess-hide")
gamburger.classList.add("gamburger-hide")
other_dishes.classList.add("other-hide")
sidess.classList.add("sides-hide")
cola.classList.add("cola-hide")
dissertss.classList.add("dissertss-hide")
meal2.classList.add("meal-hide")

alla.addEventListener("click", () => {
    all2.classList.remove("all2-hide")
    shashlik.classList.add("shashlik-hide")
    pidess.classList.add("pidess-hide")
    gamburger.classList.add("gamburger-hide")
    other_dishes.classList.add("other-hide")
    sidess.classList.add("sides-hide")
    cola.classList.add("cola-hide")
    dissertss.classList.add("dissertss-hide")
    meal2.classList.add("meal-hide")


})

pides.addEventListener("click", () => {
    all2.classList.add("all2-hide")
    shashlik.classList.add("shashlik-hide")
    pidess.classList.remove("pidess-hide")
    gamburger.classList.add("gamburger-hide")
    other_dishes.classList.add("other-hide")
    sidess.classList.add("sides-hide")
    cola.classList.add("cola-hide")
    dissertss.classList.add("dissertss-hide")
    meal2.classList.add("meal-hide")


})

burgers.addEventListener("click", () => {
    all2.classList.add("all2-hide")
    shashlik.classList.add("shashlik-hide")
    pidess.classList.add("pidess-hide")
    gamburger.classList.remove("gamburger-hide")
    other_dishes.classList.add("other-hide")
    sidess.classList.add("sides-hide")
    cola.classList.add("cola-hide")
    dissertss.classList.add("dissertss-hide")
    meal2.classList.add("meal-hide")

})

others.addEventListener("click", () => {
    all2.classList.add("all2-hide")
    shashlik.classList.add("shashlik-hide")
    pidess.classList.add("pidess-hide")
    gamburger.classList.add("gamburger-hide")
    other_dishes.classList.remove("other-hide")
    sidess.classList.add("sides-hide")
    cola.classList.add("cola-hide")
    dissertss.classList.add("dissertss-hide")
    meal2.classList.add("meal-hide")


})
sides.addEventListener("click", () => {
    all2.classList.add("all2-hide")
    shashlik.classList.add("shashlik-hide")
    pidess.classList.add("pidess-hide")
    gamburger.classList.add("gamburger-hide")
    other_dishes.classList.add("other-hide")
    sidess.classList.remove("sides-hide")
    cola.classList.add("cola-hide")
    dissertss.classList.add("dissertss-hide")
    meal2.classList.add("meal-hide")


})
drinks.addEventListener("click", () => {
    all2.classList.add("all2-hide")
    shashlik.classList.add("shashlik-hide")
    pidess.classList.add("pidess-hide")
    gamburger.classList.add("gamburger-hide")
    other_dishes.classList.add("other-hide")
    sidess.classList.add("sides-hide")
    cola.classList.remove("cola-hide")
    dissertss.classList.add("dissertss-hide")
    meal2.classList.add("meal-hide")

})
dessetrs.addEventListener("click", () => {
    all2.classList.add("all2-hide")
    shashlik.classList.add("shashlik-hide")
    pidess.classList.add("pidess-hide")
    gamburger.classList.add("gamburger-hide")
    other_dishes.classList.add("other-hide")
    sidess.classList.add("sides-hide")
    cola.classList.add("cola-hide")
    dissertss.classList.remove("dissertss-hide")
    meal2.classList.add("meal-hide")

})
meal.addEventListener("click", () => {
    all2.classList.add("all2-hide")
    shashlik.classList.add("shashlik-hide")
    pidess.classList.add("pidess-hide")
    gamburger.classList.add("gamburger-hide")
    other_dishes.classList.add("other-hide")
    sidess.classList.add("sides-hide")
    cola.classList.add("cola-hide")
    dissertss.classList.add("dissertss-hide")
    meal2.classList.remove("meal-hide")
})
kebabs.addEventListener("click", () => {
    all2.classList.add("all2-hide")
    shashlik.classList.remove("shashlik-hide")
    pidess.classList.add("pidess-hide")
    gamburger.classList.add("gamburger-hide")
    other_dishes.classList.add("other-hide")
    sidess.classList.add("sides-hide")
    cola.classList.add("cola-hide")
    dissertss.classList.add("dissertss-hide")
    meal2.classList.add("meal-hide")

})
read.addEventListener("click", () => {
    text.classList.remove("text-hide")
    text2.classList.remove("text-hide")
    text3.classList.remove("text-hide")
    read.classList.add("view2-hide")
    read2.classList.remove("view2-hide")
})
read2.addEventListener("click", () => {
    text.classList.add("text-hide")
    text2.classList.add("text-hide")
    text3.classList.add("text-hide")
    read.classList.remove("view2-hide")
    read2.classList.add("view2-hide")
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













