// document.onload(alert("Selamat datang di web Donasi Barang"))

// form-donasi
let form = document.getElementById("form")
let open = document.getElementById("open-form")
open.addEventListener("click", function() {
    form.style.display = "block"
} )

let close = document.getElementById("close-form") 
close.addEventListener("click", function() {
    form.style.display = "none"
})

// hero/header
const hero = [
    "img/hero1.jpg",
    "img/hero2.jpg",
    "img/hero3.jpg",
    "img/hero4.jpg"
]

let intervalHero = 0
function changeHero() {
    document.querySelector("header").style.backgroundImage = `url(${hero[intervalHero]})`
    intervalHero = (intervalHero + 1) % hero.length
}

setInterval(changeHero, 2000)

changeHero()

