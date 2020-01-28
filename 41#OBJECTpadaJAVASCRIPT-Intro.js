let mahasiswa = {
    nama: 'Khairul Abdi',
    lulus: true,
    ipSemester: [3.40, 3.80, 3.75, 3.80],
    alamat: {
        jalan: 'Jl.abc no.123',
        kota: 'Bandung',
        provinsi: 'Jawa Barat'
    }
}

// console.log(mahasiswa)
// console.log(mahasiswa.ipSemester)
// console.log(mahasiswa.ipSemester[2])
// console.log(mahasiswa.alamat)
// console.log(mahasiswa.alamat.kota)
// console.log(mahasiswa['alamat']['kota'])
// console.log(mahasiswa.alamat['kota'])
console.log(mahasiswa['alamat'].kota)


let mahasiswa1 = {
    nama: 'Khairul Abdi',
    lulus: true,
    ipSemester: [3.40, 3.80, 3.75, 3.80],
    ipKumulatif: function () {
        let total = 0
        let ips = this.ipSemester
        for (let i = 0; i < ips.length; i++) {
            total += ips[i]
        }
        return total / ips.length
    },
    alamat: {
        jalan: 'Jl.abc no.123',
        kota: 'Bandung',
        provinsi: 'Jawa Barat'
    }
}

console.log(mahasiswa1.ipKumulatif().toFixed(2))