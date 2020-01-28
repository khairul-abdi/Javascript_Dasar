function pattern(angka) {
  if (angka % 2 == 0) return `Tidak dapat dijadikan persegi sama kaki`
  let len = angka
  let result = ''
  let counter = angka - 1
  for (let i = 0; i < angka; i++) {
    for (var k = i; k < angka - 1; k++) {
      result += ' '
    }

    for (let j = counter; j < len; j++) {
      result += '*'
    }
    counter--
    len++
    console.log(result)
    result = ''
  }
}

pattern(5)
pattern(3)
pattern(7)
pattern(1)

