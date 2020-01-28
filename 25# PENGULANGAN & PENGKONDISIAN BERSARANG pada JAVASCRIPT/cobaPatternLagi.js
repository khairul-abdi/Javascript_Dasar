function pattern(angka) {
  let result = ''
  for (let i = 0; i < angka; i++) {
    for (var k = 0; k < angka; k++) {
      if (k <= i) {
        result += '*'
      }
    }
    console.log(result)
    result = ''
  }

  for (let j = 0; j < angka - 1; j++) {
    for (let l = j; l < angka - 1; l++) {
      result += '*'
    }
    console.log(result)
    result = ''
  }
}

pattern(5)