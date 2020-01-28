function perimeter(n) {

  let result = 4
  let nFibonaci = 0
  if (n == 0) return result

  let arr = [1, 1]

  for (let i = 1; i < n; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  }
  // console.log(arr)

  for (let i = 0; i < arr.length; i++) {
    nFibonaci += arr[i]
  }
  return result * nFibonaci
}

console.log(perimeter(0), 4)
console.log(perimeter(5), 80)
// console.log(perimeter(7), 216)
// console.log(perimeter(20), 114624)
// console.log(perimeter(30), 14098308)