// let item = prompt('Masukkan nama makanan/minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)')

// switch (item) {
//   case 'nasi':
//     alert('Makanan / minuman sehat!')
//     break
//   case 'daging':
//     alert('Makanan / minuman sehat!')
//     break
//   case 'susu':
//     alert('Makanan / minuman sehat!')
//     break
//   case 'hamburger':
//     alert('Makanan / minuman TIDAK SEHAT')
//     break
//   case 'softdrink':
//     alert('Makanan / minuman TIDAK SEHAT')
//     break
//   default:
//     alert('anda memasukkan nama makanan / minuman yang salah!')
//     break
// }


// modifikasi

let item = prompt('Masukkan nama makanan/minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)')

switch (item) {
  case 'nasi':
  case 'daging':
  case 'susu':
    alert('Makanan / minuman sehat!')
    break
  case 'hamburger':
  case 'softdrink':
    alert('Makanan / minuman TIDAK SEHAT')
    break
  default:
    alert('anda memasukkan nama makanan / minuman yang salah!')
    break
}