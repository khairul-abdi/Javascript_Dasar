function totalBilangan() {
  let total = 0
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
}

console.log(totalBilangan(3, 4, 6, 2))