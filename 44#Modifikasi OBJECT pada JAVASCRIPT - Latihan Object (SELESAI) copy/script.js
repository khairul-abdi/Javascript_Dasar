// Membuat Object Angkot

function Angkot(sopir, trayek, penumpang, kas) {
   this.sopir = sopir
   this.trayek = trayek
   this.penumpang = penumpang
   this.kas = kas

   this.penumpangNaik = function (namaPenumpang) {
      if (this.penumpang.length == 0) {
         this.penumpang.push(namaPenumpang)
         return penumpang
      } else if (this.penumpang.length < 15) {
         for (let i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
               alert(namaPenumpang + ' sudah ada di dalam angkot')
               return penumpang
            }
         }

         for (let i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == undefined) {
               this.penumpang[i] = namaPenumpang
               return penumpang
            } else if (i == this.penumpang.length - 1) {
               this.penumpang.push(namaPenumpang)
               return penumpang
            }
         }
      } else {
         for (let i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
               alert(namaPenumpang + ' sudah ada di dalam angkot')
               return penumpang
            }
         }

         for (let i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == undefined) {
               this.penumpang[i] = namaPenumpang
               return penumpang
            }
         }
         alert('Angkot sudah penuh')
         return penumpang
      }
   }


   this.penumpangTurun = function (namaPenumpang, bayar) {
      if (this.penumpang.length == 0) {
         alert('Angkot masih kosong')
         return false
      }

      for (let i = 0; i < this.penumpang.length; i++) {
         if (this.penumpang[i] == namaPenumpang) {
            this.penumpang[i] = undefined
            this.kas += bayar
            return penumpang
         } else if (i == penumpang.length - 1) {
            alert(namaPenumpang + ' tidak ada di dalam angkot')
            return penumpang
         }
      }
   }
}

let angkot1 = new Angkot('Sandhika Galih', ['Cicaheum', 'Cibiru'], [], 0)

let angkot2 = new Angkot('Tom Cruise', ['Antapani', 'Ciroyom'], [], 0)