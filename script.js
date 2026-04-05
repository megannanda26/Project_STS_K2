// document.onload(alert("Selamat datang di web Donasi Barang"))

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

// form-donasi
let form = document.getElementById("form")
let open = document.getElementById("open-form")

open.addEventListener("click", function() {
    form.style.display = "block"
    noScroll()
} )

let close = document.getElementById("close-form") 
close.addEventListener("click", function() {
    form.style.display = "none"
    enableScroll()
})

function noScroll() {
    document.body.classList.add("no-scroll")
}

function enableScroll() {
    document.body.classList.remove("no-scroll")
}

let submit = document.getElementById("form-submit")
let list = document.getElementById("list-donasi")
let dataDonasi = []
let editId = null

function loadData() {
    const load = localStorage.getItem("donasiHubData")
    if (load) {
        dataDonasi = JSON.parse(load)
    } else {
        saveData()
    }
    renderData()
}   

function saveData() {
    localStorage.setItem("donasiHubData", JSON.stringify(dataDonasi))
} 

function hapusDonasi(id) {
    if(confirm("Yakin ingin menghapus donasi ini?")) {
        dataDonasi = dataDonasi.filter(donasi => donasi.id !== id)
        saveData()
        renderData()
    }
}

function editDonasi(id) {
    const donasi = dataDonasi.find(d => d.id === id)
    if(donasi) {
        document.getElementById("nama").value = donasi.nama
        document.getElementById("email").value = donasi.email
        document.getElementById("jenis").value = donasi.jenis
        document.getElementById("jumlah").value = donasi.jumlah
        document.getElementById("alamat").value = donasi.alamat
        
        editId = id
        form.style.display = "block"
        submit.textContent = "Update Donasi"
        noScroll()
    }
}

// Render data
function renderData() {
    if(dataDonasi.length === 0) {
        list.innerHTML = "<p style='text-align:center; padding:20px;'>Belum ada donasi. Yuk donasi sekarang!</p>"
        return
    }

    list.innerHTML = ""
    dataDonasi.forEach(donasi => {
        let div = document.createElement("div")
        div.classList.add("card-donasi")
        
        div.innerHTML = `
            <p><strong>Nama</strong>: ${donasi.nama}</p>
            <p><strong>Email</strong>: ${donasi.email}</p>
            <p><strong>Jenis Barang</strong>: ${donasi.jenis}</p>
            <p><strong>Jumlah</strong>: ${donasi.jumlah}</p>
            <p><strong>Alamat</strong>: ${donasi.alamat}</p><br>
            <button class="edit">Edit</button>
            <button class="hapus">Delete</button>
        `

        div.querySelector(".hapus").addEventListener("click", function() {
            hapusDonasi(donasi.id)
        })
            
        div.querySelector(".edit").addEventListener("click", function() {
            editDonasi(donasi.id)
        })
        list.appendChild(div)
    })
}

submit.addEventListener("click", function(){
    let nama = document.getElementById("nama").value
    let email = document.getElementById("email").value
    let jenis = document.getElementById("jenis").value
    let jumlah = document.getElementById("jumlah").value
    let alamat = document.getElementById("alamat").value

    if(nama === "" || email === "" || jenis === "" || jumlah === "" || alamat === ""){
        alert("Isi semua data!")
        return
    }
    
    if(editId !== null) {
        let index = dataDonasi.findIndex(d => d.id == editId)
        if(index !== -1) {
            dataDonasi[index] = {
                ...dataDonasi[index],
                nama: nama,
                email: email,
                jenis: jenis,
                jumlah: parseInt(jumlah),
                alamat: alamat
            }
        }
        editId = null
    } else {
        let newId = Date.now()
        let newDonation = {
            id: newId,
            nama: nama,
            email: email,
            jenis: jenis,
            jumlah: parseInt(jumlah),
            alamat: alamat
        }
        dataDonasi.push(newDonation)
    }
    // auto close
    form.style.display = "none"
    enableScroll()
    
    // reset
    document.getElementById("nama").value = ""
    document.getElementById("email").value = ""
    document.getElementById("jenis").value = ""
    document.getElementById("jumlah").value = ""
    document.getElementById("alamat").value = ""
    
    saveData()
    renderData()
    return true
})

loadData()