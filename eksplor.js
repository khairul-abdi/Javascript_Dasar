function calculate(number) {
  let arrTambah = []
  let arrKurang = []

  for (let i = 0; i < number.length; i++) {
    (number[i] % 2 == 0) ? arrTambah.push(number[i]): arrKurang.push(number[i])
  }
  let resTambah = tambah(arrTambah)
  let resKurang = kurang(arrKurang)

  let arr = [resTambah, resKurang]
  return arr
}

function tambah(arrTambah) {
  let jum = 0
  for (const i of arrTambah) jum += i
  return jum
}

const kurang = arrKurang => {
  let kur = 0
  for (const i of arrKurang) kur -= i
  return kur
}


console.log(calculate([2, 5, 3, 5, 6, 3, 2, 5, 2, 5, 3]))