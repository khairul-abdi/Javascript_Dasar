function pattern(angka) {
  let result = ''
  let counter = 0
  for (let i = 0; i < angka; i++) {
    for (let j = 0; j <= angka; j++) {
      if (j <= counter) {
        result += ' '
      } else {
        result += '*'
      }
    }
    counter++
    console.log(result)
    result = ''
  }
}

pattern(5)