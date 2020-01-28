let comp = Math.ceil(Math.random() * 10)
// console.log(comp)
let coba = 3

alert(`Tebak angka 1 - 10 \nKamu punya ${coba} kesempatan`)
while (coba > 0) {
  coba--
  var input = prompt('Masukkan angka tebakan: ')
  if (input == comp) {
    alert(`anda BENAR! \nangka yang dicari adalah ${comp} `)
    alert(`terima kasih`)
    coba = -1
  } else if (input < comp) {
    if (coba > 0) {
      alert(`terlalu RENDAH!!! \nayo masih ada ${coba} kesempatan`)
    }
  } else {
    if (coba > 0) {
      alert(`terlalu TINGGI!!! \nayo masih ada ${coba} kesempatan`)
    }
  }
}

if (coba == 0) {
  if (input < comp) {
    alert(`terlalu RENDAH!!! \nkesempatan anda habis`)
  } else {
    alert(`terlalu TINGGI!!! \nkesempatan anda habis`)
  }
}
alert(`ANDA gagal! \nangka yang di cari : ${comp}`)
alert(`terima kasih`)
