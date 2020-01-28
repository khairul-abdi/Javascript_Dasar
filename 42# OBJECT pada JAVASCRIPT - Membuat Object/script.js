// MEMBUAT OBJECT
// Object Literal

let mhs1 = {
  nama: 'Khairul Abdi',
  nrp: '003434343',
  email: 'kabdi@gmail.com',
  jurusan: 'Teknik Informatika'
}

let mhs2 = {
  nama: 'Abdi',
  nrp: '3434343',
  email: 'abdi@gmail.com',
  jurusan: 'Teknik Industri'
}



// Function Declaration
let buatObjMhs = (nama, nrp, email, jurusan) => {
  let mhs = {}
  mhs.nama = nama
  mhs.nrp = nrp
  mhs.email = email
  mhs.jurusan = jurusan
  return mhs
}

let mhs3 = buatObjMhs('Khairul', '3343434', 'kabdi384@gmail.com', 'Teknik Informatika')



// Constructor
let Mahasiswa = function (nama, nrp, email, jurusan) {
  this.nama = nama
  this.nrp = nrp
  this.email = email
  this.jurusan = jurusan

}

let mhs4 = new Mahasiswa('Erik', '1234', 'erik@icloud.com', 'Teknik Mesin')
// console.log(mhs4)

