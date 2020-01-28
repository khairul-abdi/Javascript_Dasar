let jmlAngkot = 10
let noAngkot = 1
let angkotBeroperasi = 8

while (noAngkot <= angkotBeroperasi) {
  console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
  noAngkot++
}

for (let i = noAngkot; i <= jmlAngkot; i++) {
  console.log('Angkot No. ' + i + ' sedang tidak beroperasi')
}