// https://medium.com/@renopp/kenalan-dengan-es6-javascript-introduction-variable-arrow-function-part1-6bd5c148473b

// VAR itu function scope dan LET itu block scope KATA OLEH SI RENOP


// VAR (FUNCTION SCOPE)


// for (var i = 0; i < 5; i++) {
//   console.log(i)  // 1 2 3 4 
// }
// console.log(i) //5 Tetap jalan karna deklarisasi i menggunakan var

// var m = 3
// function looping() {
//   // console.log(m)    // kalau ini tetap jalan di deklarasi di luar scope yang menjadi global scope

//   for (var i = 0; i < 5; i++) {
//     console.log(i) //1 2 3 4
//   }
// }
// looping()
// console.log(i)   //ReferenceError: i is not defined  (Karna var itu Function Scope)



// function looping() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i)  // 1 2 3 4 
//   }

//   function inLooping() {
//     console.log(i)  //i = 5   (Tetap jalan karna function inLooping (child) di dalam looping (root) || anak berada di dalam induk )
//   }
//   inLooping()
// }
// looping()




// LET (BLOCK SCOPE)

// for (let i = 0; i < 5; i++) {
//   console.log(i)
// }
// console.log(i)  //ReferenceError: i is not defined (Karna let itu block scope)



// DAPAT BERJALAN KARNA LET BERADA DI SCOPE MASING MASING YAITU SCOPE {Let Work in Here}
// for (let i = 0; i < 5; i++) {
//   console.log(i)  //1 2 3 4
// }
// if (true) {
//   let i = '100'
//   console.log('i = ', i)  // i = '100'
// }




// const phi = 3.14

// phi = 3.147   //TypeError: Assignment to constant variable. (ERROR karna const tidak dapat di assignment untuk kedua kalinya)

// console.log(phi)















