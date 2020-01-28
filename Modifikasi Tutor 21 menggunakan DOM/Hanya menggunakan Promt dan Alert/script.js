let jmlAngkot = prompt('Jumlah Angkot : ')

let jawaban = confirm('Apakah ada angkot yang tidak Beroperasi?')
let jmlAngkotNotUse = []
if (jawaban == true) {
  let angkotNotUse = prompt('Berapa angkot yang tidak beroperasi?')
  while (angkotNotUse > 0) {
    let nomorAngkotNotUse = prompt('Nomor angkot yang tidak beroperasi : ')
    jmlAngkotNotUse.push(nomorAngkotNotUse)
    angkotNotUse--
  }
}

let angkotUse = jmlAngkot - jmlAngkotNotUse.length
document.getElementById('list-angkot').innerHTML = jmlAngkot
document.getElementById('list-daftar-angkotUse').innerHTML = angkotUse
document.getElementById('list-daftar-angkotNotUse').innerHTML = jmlAngkotNotUse.length
document.getElementById('notuse').innerHTML = jmlAngkotNotUse