// https://medium.com/@renopp/kenalan-dengan-es6-javascript-introduction-variable-arrow-function-part1-6bd5c148473b


// contoh 1
console.log('contoh 1')
const func1 = function (a, b) {
  return a + b
}
console.log(func1(2, 3)) //5



// contoh 2
console.log('contoh 2')
const func2 = (a, b) => {
  return a + b
}
console.log(func2(3, 3)) //6



//contoh 3
console.log('contoh 3')
const func3 = (a, b) => a + b
console.log(func3(4, 5))  //9



//contoh 4
console.log('contoh 4')
const func4 = (dobel) => dobel + dobel
console.log(func4(5)) // 10



//contoh 5
console.log('contoh 5')
const func5 = dobel => dobel + dobel
console.log(func5(6)) //12



//contoh 6
console.log('contoh 6')
const numbers1 = [1, 2, 3, 4, 5]
const kalidua1 = numbers1.map(function (number) {
  return number * 2
})
console.log(kalidua1)



//contoh 7
console.log('contoh 7')
const numbers2 = [3, 10, 20, 30, 50]
const kalidua2 = numbers2.map(number => number * 2)
console.log(kalidua2)