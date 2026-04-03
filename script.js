// document.onload(alert("Selamat datang di web Donasi Barang"))
let form = document.getElementById("form-donasi")
let open = document.getElementById("open")
open.addEventListener("click", function() {
    form.removeAttribute("hidden")
} )
let close = document.getElementById("close")
close.addEventListener("click", function() {
    form.setAttribute("hidden", true)
})

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