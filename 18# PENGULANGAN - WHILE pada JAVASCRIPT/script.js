let ulang = true
let hitung = 1
while (ulang) {
    // alert('Hello World ' + hitung)
    console.log('Hello World ' + hitung)
    hitung++
    ulang = confirm('Ulang??')
}
alert('Sudah mengulang sebanyak : ' + (hitung - 1))