function recFaktorial(n) {
  if (n == 0) return 1
  return n * recFaktorial(n - 1)
}

console.log(recFaktorial(5))