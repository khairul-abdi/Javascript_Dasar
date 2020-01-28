//this
// console.log(window === this)
// var a = 10
// console.log(this.a)
// console.log(window.a)


// Membuat object

// cara 1 - Function Declaration
// function halo() {
//     console.log(this)
//     console.log('halo')
// }
// this.halo()

// this mengembalikan object Global



// cara 2 - object literal
// let obj = {
//     a: 10,
//     nama: 'khairul'
// }
// obj.halo = function () {
//     console.log(this)
//     console.log('halo')
// }
// obj.halo()
// this mengembalikan object yang bersangkutan


// cara 3 - constructor

function Halo() {
    console.log(this)
    console.log('halo')
}

new Halo()

let obj1 = new Halo()
let obj2 = new Halo()
// this mengembalikan object yang baru dibuat