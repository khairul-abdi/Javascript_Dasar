let penumpang = ['Sandhika', undefined, 'Doddy']
function tambahPenumpang(namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang)
    return penumpang
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        console.log(namaPenumpang + ' sudah ada di dalam angkot')
        return penumpang
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang)
        return penumpang
      }
    }

    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang
        return penumpang
      }
    }
  }
}
