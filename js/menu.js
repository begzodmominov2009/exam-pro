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











