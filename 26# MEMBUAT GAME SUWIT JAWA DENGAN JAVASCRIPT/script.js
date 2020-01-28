//menangkap pilihan player
let tanya = true
while (tanya) {
  let p = prompt('pilih : gajah, semut, orang')

  //menangkap pilihan computer
  // membangkitkan bilangan random
  let comp = Math.random()

  if (comp < 0.34) {
    comp = 'gajah'
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = 'orang'
  } else {
    comp = 'semut'
  }

  // console.log(comp)

  //menentukan rules

  let hasil = ''
  if (p == comp) {
    hasil = 'SERI!'
  } else if (p == 'gajah') {
    hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!'
  } else if (p == 'orang') {
    hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!'
  } else if (p == 'semut') {
    hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!'
  } else {
    hasil = 'memasukkan pilihan yang salah!!'
  }

  // tampilkan hasilnya
  alert('Kamu memilih ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasil : kamu ' + hasil)

  tanya = confirm('lagi?')
}

alert('terima kasih sudah bermain')
