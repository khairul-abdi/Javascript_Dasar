let arr = [1, 2, 4, 5, 6]

let arr1 = arr.slice(arr.length - 1)

console.log(arr1)

console.log('---------------------------')

let myArr = ['khairul', 'abdi', 'dongoran']

myArr.splice(1, 6, 'dsdsd') //walaupun key -nya sampai 2 tetap akan di hapus yang lainnya juga
console.log(myArr)


console.log('----------------------------------')

let str = ['abdi']

str.splice(4, 0, 'c') //tetap ditambahkan ke index nya walaupun itu index kosong
console.log(str)

console.log('----------------------------------')
let str1 = 'abdi'
strBaru = str1.slice(1, 3)
console.log(strBaru)

console.log('----------------------------------')

let str2 = 'khairul abdi dongoran'
strBaru2 = str2.slice(8)
strBaru2 = str2.slice(8, 9) //mengambil satu huruf harus seperti itu angka 8 sebagai titik awal dari index dan angka 9 sebagai angka dari urutan angka

console.log(strBaru2)