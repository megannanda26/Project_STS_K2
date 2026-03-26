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
