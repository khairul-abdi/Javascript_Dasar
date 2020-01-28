// ForEach

let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// MENGGUNAKAN LOOP BIASA

// for (let i = 0; i < angka.length; i++) {
//   console.log(angka[i])
// }




// MENGGUNAKAN forEach TANPA ADA INDEX dan menggunakan ARROW FUNCTION

// angka.forEach(e => {
//   console.log(e)
// })




// MENGGUNAKAN forEach TANPA ADA INDEX dan menggunakan ARROW FUNCTION

// angka.forEach(function (e) {
//   console.log(e)
// })



// MENGGUNAKAN forEach SERTA INDEX dan menggunakan ARROW FUNCTION

// let nama = ['khairul', 'abdi', 'dongoran']
// nama.forEach((e, i) => {
//   console.log(`Mahasiswa ke- ${(i + 1)} adalah ${e}`)
// })



// MENGGUNAKAN MAP 

let angka3 = [1, 2, 3, 4, 5, 6, 7,]

// angka3.map((e, i) => {
//   console.log(e, i)
// })




// MENGGUNAKAN MAP SERTA MEMBUAT ARRAY DUA DIMENSI DI MANA MEMILIKI NILAI DAN INDEX

// let result = angka3.map((e, i) => {
//   return e > 4 //HANYA MENGEMBALIKAN NILAI FALSE JIKA SALAH DAN TRUE JIKA BENAR ke array
// })

// console.log(result)   // [[1, 0],[2, 1],[3, 2],[4, 3],[5, 4],[6, 5],[7, 6]]



// MENGGUNAKAN MAP SERTA MENGKALKULASI DENGAN 2 DAN DI KEMBALIKAN NILAINYA KE 'output'

// let output = angka3.map(e => {
//   return e * 2
// })
// console.log(output.join('-'))  //2-4-6-8-10-12-14


// SORT
// ADA MASALAH JIKA MENGGUNAKAN SORT DIDALAM ARRAY YANG SUDAH PULUHAN

let angka4 = [1, 2, 3, 4, 5, 8, 3, 5]

// angka4.sort()
// console.log(angka4)

let angka5 = [1, 10, 20, 2, 3, 4, 5, 8, 3, 5]
angka5.sort((a, b) => a - b)
console.log(angka5)
