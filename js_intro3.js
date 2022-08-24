import fetch from 'node-fetch';

{// 1.	Buatlah sambungan program menggunakan then catch dan juga try catch untuk mengecek hari kerja dari kode Asynchronous dibawah dan jelaskan penggunaan then catch dan try catch dengan memberikan komentar di bawahnya.
const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if(cek){
        resolve(cek);
      } else {
        reject(new Error('Hari ini bukan hari kerja'));
      }
    }, 3000)
  })
};

// Real hari ini
let hariIni = new Date().getDay();
switch (hariIni) {
  case 0:
    hariIni = 'minggu';
    break;
  case 1:
    hariIni = 'senin';
    break;
  case 2:
    hariIni = 'selasa';
    break;
  case 3:
    hariIni = 'rabu';
    break;
  case 4:
    hariIni = 'kamis';
    break;
  case 5:
    hariIni = 'jumat';
    break;
  case 6:
    hariIni = 'sabtu';
    break;
  default:
    break;
}

// Then-Catch : panggil function soal dan buat then-catch nya
cekHariKerja('minggu') // INPUTAN MANUAL !!!
  .then((res) => (
    console.log(res[0].toUpperCase() + res.substring(1) + ' adalah hari kerja. Then-Catch')
  ))
  .catch((err) => (
    console.log(err + '. Then-Catch')
  ));

// Try-Catch : panggil function soal dan buat then-catch nya
try{
  cekHariKerja('') // INPUTAN MANUAL !!!
  .then((res) => (
      console.log(res[0].toUpperCase() + res.substring(1) + ' adalah hari kerja. Try-Catch.2')
  ))
  .catch((err) => (
    console.log(err + '. Try-Catch.2') // Tidak bisa nge-throw ke catch-nya try
  ))
}
catch(err) {console.log(err)} ;
// Try-Catch dapat langsung digunakan untuk melaporkan jika program error sesuai perintah user. Lebih cocok dipakai bersama async-await.
// Syntax try-catch :
// try{}
// catch(){}

}

{// 2. Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map
  const getMonth= (callback) => {
    setTimeout(() => {
    let error = false;
    let month = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
}

// // Tampilkan tiap bulan dalam array
// const mapMethod = (a, c) => new Map(
//   console.log(c)
// );

// // Tampilkan tiap bulan per baris
// const mapMethod = (nol, months) => new Map(
//     months.forEach(month => console.log(month)) 
// );

// getMonth(mapMethod);

}

{// 3. Buat 2 program bebas menggunakan promise seperti soal nomor 1
  {// Program bebas 1
    const timePres = (timer, youStop) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
          let cek = dataDay.find((item) => {
            return item === day;
          })
          if(cek){
            resolve(cek);
          } else {
            reject(new Error('Hari ini bukan hari kerja'));
          }
        }, 1000);
      })
    }
  }
    
  {// Program bebas 2
    const diajakNgumpul = (tOf, balas) => {
      return new Promise((resolve, reject = 100) => {
        setTimeout(() => {
          if(balas == null) {
            console.log('(*Abaikan)');
          } else if (tOf){
            resolve(balas/1000);
          } else {
            reject(balas/1000);
          }
        }, balas);
      })
    }
  }
}

{// 4. Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini {https://jsonplaceholder.typicode.com/users}
  async function restAPI(link, req) {
    // Validasi jika '' atau tidak ada Key Object
    if(req === undefined || req === ''){
      console.log("Tidak ada Key Object yang dimasukkan.");
    } else {
      // Method Fetch
      const response = await fetch(link);
      const allData = await response.json();

      allData.forEach(data => {
        if(req == 'all'){ // req == 'all' untuk menampilkan semua data
          console.log(data);
        } else {
          let cetak = data[req]; // cetak spesifik data, contoh 'data.nama'
          console.log(cetak);
        }
      });
    }
  }
  // Perintah jika tidak memenuhi validasi
  // restAPI('https://jsonplaceholder.ty picode.com/users');
  // restAPI('https://jsonplaceholder.typicode.com/users', '');

  // Perintah-perintah :
  // restAPI('https://jsonplaceholder.typicode.com/users', 'name');
  // restAPI('https://jsonplaceholder.typicode.com/users', 'company');
  // restAPI('https://jsonplaceholder.typicode.com/users', 'naMe');

  // restAPI('https://jsonplaceholder.typicode.com/users', 'all');
}