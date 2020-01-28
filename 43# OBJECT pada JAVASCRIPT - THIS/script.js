// console.log(typeof window)
// console.log(this)
// console.log(window)
// console.log(this === window)  //true



// let a = 10
// console.log(a)  //10
// console.log(window.a) //undefined (Karna Menggunakan let)
// console.log(this.a)  //undefined (Karna Menggunakan let)


// var b = 10
// console.log(b)  //10
// console.log(window.b) //10 (Jalan karna var adalah global)
// console.log(this.b)  //10 (Jalan karna var adalah global)






// Membuat Object

// Cara 1 - Function declaration
// function halo() {
//   console.log(this)
//   console.log('halo')
// }
// this.halo()
// this mengembalikan object global




// Cara 2 - Object Literal
// let obj = { a: 10, nama: 'khairul' }
// obj.halo = function () {
//   console.log(this)
//   console.log('halo')
// }
// obj.halo()
// this mengembalikan object yang bersangkutan




// Cara 3 - Constructor
function Halo() {
  console.log(this)
  console.log('halo')
}
new Halo()
// this mengembalikan object yang baru dibuat

