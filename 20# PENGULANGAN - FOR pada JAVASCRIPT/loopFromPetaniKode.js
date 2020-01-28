// https://www.petanikode.com/javascript-perulangan/


console.log(`ulangi langkah ini`.repeat(10))

console.log('--------------------------------')
// PUNYA KU

let ulangi = confirm('Apakah ingin mengulang')
let bintang = ''
let counter = 0
while (ulangi) {
  counter++
  bintang += '*'
  document.write(counter + ':' + bintang + "<br>")

  ulangi = confirm('Apakah ingin mengulang')
}


// PUNYA PETANI KODE
// var ulangi = confirm("apakah anda ingin mengulang?");
// var counter = 0;

// while (ulangi) {
//   counter++;
//   var bintang = "*".repeat(counter) + "<br>";
//   document.write(counter + ": " + bintang);
//   ulangi = confirm("apakah anda ingin mengulang?");
// }