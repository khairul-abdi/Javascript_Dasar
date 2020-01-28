//Membuat Object
//Object Literal

let mhs1 = {
    nama: 'Khairul Abdi',
    nrp: '04553775',
    email: 'kabdi384@gmail.com',
    jurusan: 'Teknik Informatika'
}

console.log(mhs1)

let mhs2 = {
    nama: 'Khairul Abdi',
    nrp: '04553775',
    email: 'kabdi384@gmail.com',
    jurusan: 'Teknik Informatika'
}

console.log(mhs2)

// Function Declaration

function buatObjMhs(nama, nrp, email, jurusan) {
    // Yang cara pertama    
    // let mhs = {}
    // mhs.nama = nama
    // mhs.nrp = nrp
    // mhs.email = email
    // mhs.jurusan = jurusan
    // return mhs

    // Yang cara kedua
    let mhs = {
        nama: nama,
        nrp: nrp,
        email: email,
        jurusan: jurusan
    }


    return mhs
}

// let mhs3 = buatObjMhs('Khairul', '343434343', 'kab384@gmail.com', 'teknik elektro')
// console.log(mhs3)

// Lebih ringkas ketimbang object literal di atas
console.log(buatObjMhs('Khairul', '343434343', 'kab384@gmail.com', 'teknik elektro'))
console.log(buatObjMhs('Abdi', '343434343', 'kab384@gmail.com', 'teknik elektro'))

//Constructor

function Mahasiswa(nama, email, nrp, jurusan) {
    this.nama = nama
    this.email = email
    this.nrp = nrp
    this.jurusan = jurusan
}

// let mhs4 = new Mahasiswa('Erick', '034343434', 'erick@gmail.com', 'Taknik Mesin')
// console.log(mhs4)
console.log(new Mahasiswa('Erick', '034343434', 'erick@gmail.com', 'Taknik Mesin'))