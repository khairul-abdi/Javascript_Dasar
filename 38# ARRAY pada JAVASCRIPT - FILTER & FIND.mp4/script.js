// FILTER

let angka = [1, 2, 4, 5, 2, 5, 6, 7, 8, 9]

let result = angka.filter(e => {
  // return e % 2 == 0
  return e > 5
})
console.log(result)

// FIND
// Find mencari nilai dengan value paling depan jika memiliki lebih dari dua jawaban
// Menghasilkan 1 value dan bukan array

let angka1 = [1, 2, 4, 5, 2, 5, 6, 7, 8, 9]

let output = angka1.find(e => {
  return e > 5
})
console.log(output)