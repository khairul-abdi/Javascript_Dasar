let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let result = []
arr.forEach(e => {
  result.push(e > 3)
})

console.log(result)