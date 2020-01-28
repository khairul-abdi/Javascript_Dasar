//CARA SIMPLE BUAT KONFIRMASI

// let tes = confirm('Welcome to jungle')

// if (tes === true) {
//     alert('Kamu mengklik OK')
// } else {
//     alert('Kamu mengklik CANCEL')
// }


alert('Selamat Datang...')

let lagi = true

while (lagi) {
    let nama = prompt('Masukkan Nama : ')

    alert('Halo ' + nama)
    lagi = confirm('Coba Lagi?')
}

alert('Terima Kasih..')