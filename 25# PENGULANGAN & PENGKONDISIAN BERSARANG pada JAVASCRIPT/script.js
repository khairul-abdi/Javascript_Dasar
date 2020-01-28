let n = 5
let result = ''
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    result += '* '
  }
  result += '\n'
}
console.log(result)
console.log('---------------------------')

let m = 5
let result1 = ''
for (let i = 0; i < m; i++) {
  for (let j = i; j < m; j++) {
    result1 += '* '
  }
  result1 += '\n'
}
console.log(result1)

console.log('---------------------------')

let o = 5
let res = ''
let count = 0

for (let i = 0; i < o; i++) {
  for (var k = 0; k < count; k++) {
    res += ' '
  }

  for (let j = k; j < o; j++) {
    res += '*'
  }
  console.log(res)
  res = ''
  count++
}