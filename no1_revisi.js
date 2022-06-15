/* 1.	Buatlah sambungan program menggunakan then catch dan juga try catch
untuk mengecek hari kerja dari kode Asynchronous dibawah dan 
jelaskan penggunaan then catch dan try catch dengan memberikan komentar di bawahnya. */

const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try{
        const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
        let cek = dataDay.find((item) => {
          return item === day;
        });
        if (cek) {
          resolve(cek);
        } else {
          reject(new Error("Hari ini bukan hari kerja"));
        }
      }
      catch (err) {  };
    }, 3000);
  });
};

// Real hari ini, jika inputan memakai data pada hari di running-kan
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
// validasi inputan hari
let validasiHari = (inputan) => {
  
  if (inputan == '' || inputan == null || inputan == undefined) {
    console.log('Silahkan isi inputan data terlebih dahulu.');
    return 0;
  } else {
    let hariValid = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];
    let hariValidTF = hariValid.find((item) => { return item === inputan.toLowerCase(); });
    if (!hariValidTF) {
      console.log('Periksa kembali penulisan inputan.');
      return 0;
    } else { return 1; }
  }
};

// let inputan = 'rabu';
// console.log(inputan.toLowerCase().find(["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]));

// Contoh inputan=| hariIni | 'sabtu' | 'kamis'  | 'kAMis' | 'k@Mis'|

// Then-Catch
cekHariKerja(validasiHari('rabu'))
  .then((res) =>
    console.log(
      `${res[0].toUpperCase()}${res.substring(1)} adalah hari kerja. (dari Then-Catch)`
    )
  )
  .catch((err) => console.log(`${err}. (dari Then-Catch)`));

// // Try-Catch
// try {
//   cekHariKerja('minggu') // Input: hariValid(hariIni) || hariValid('minggu') || hariValid('kAMis') || hariValid('k@Mis')
//     .then((res) => (
//       console.log(`${res[0].toUpperCase()}${res.substring(1)} adalah hari kerja. (dari Then Try-Catch)`)
//     ))
//     .catch((err) => (
//       console.log(`${err}. (dari Then Try-Catch)`)
//     ))
// }
// catch (err) { console.log(err) };


/*

Then-Catch digunakan untuk melaporkan jika program error sesuai perintah user,
setelah mendapat hasil 'resolve' atau 'reject' dari 'Promise'.
Method.then dapat dibuat lebih dari sekali dengan syarat ada return dari 'Then' sebelumnya.
Syntax membuat Promise:
variabel = new Promise(resolve, reject) => {
  if() { resolve() } else { reject() }
}
Syntax menampilkannya ke then-catch :
variabel()
 .then(() => ())
 .catch(() => ())

Try-Catch dapat langsung digunakan untuk melaporkan jika program error sesuai perintah user.
Lebih cocok dipakai bersama async-await.
Syntax try-catch :
try{}
catch(){}

*/