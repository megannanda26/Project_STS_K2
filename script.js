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

let submit = document.getElementById("form-submit")
let list = document.getElementById("list-donasi")

submit.addEventListener("click", function(){
    let nama = document.getElementById("nama").value
    let barang = document.getElementById("barang").value
    let jumlah = document.getElementById("jumlah").value
    let alamat = document.getElementById("alamat").value

    if(nama === "" || barang === "" || jumlah === "" || alamat === ""){
        alert("Isi semua data!")
        return
    }

    let div = document.createElement("div")
    div.classList.add("card-donasi")

    div.innerHTML = `
        <p>Nama: ${nama}</p>
        <p>Barang: ${barang}</p>
        <p>Jumlah: ${jumlah}</p>
        <p>Alamat: ${alamat}</p>
        <button class="hapus">Delete</button>
    `

    list.appendChild(div)

    div.querySelector(".hapus").addEventListener("click", function(){
        div.remove()
    })

    // auto close
    form.style.display = "none"

    // reset
    document.getElementById("nama").value = ""
    document.getElementById("barang").value = ""
    document.getElementById("jumlah").value = ""
    document.getElementById("alamat").value = ""
})
