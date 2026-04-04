// document.onload(alert("Selamat datang di web Donasi Barang"))
let form = document.getElementById("form-donasi")
let open = document.getElementById("open")
let close = document.getElementById("close")

open.addEventListener("click", function() {
    form.removeAttribute("hidden")
    setTimeout(() => {
        form.classList.add("show")
    }, 10)
})

close.addEventListener("click", function() {
    form.classList.remove("show")
    setTimeout(() => {
        form.setAttribute("hidden", true)
    }, 300)
})

let submit = document.getElementById("submit")
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

    form.classList.remove("show")
    setTimeout(() => {
    form.setAttribute("hidden", true)
    }, 300)

    document.getElementById("nama").value = ""
    document.getElementById("barang").value = ""
    document.getElementById("jumlah").value = ""
    document.getElementById("alamat").value = ""
})
