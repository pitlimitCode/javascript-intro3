/* 1.	Buatlah sambungan program menggunakan then catch dan juga try catch
untuk mengecek hari kerja dari kode Asynchronous dibawah dan 
jelaskan penggunaan then catch dan try catch dengan memberikan komentar di bawahnya. */
console.log('~~~~~ SOAL NOMOR 1: ~~~~~');
console.log('');

const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        day = day.toLowerCase(); //
        const hariValid = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];
        const hariValidCek = hariValid.find((item) => { return item === day });

        if (day == '' || day == null || day == undefined) {
          console.log('Silahkan isi inputan data terlebih dahulu.'); 
        } else if (!hariValidCek) {
          console.log('Cek kebmali penulisan hari'); 
        } else if (hariValidCek) {
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
      } catch (err) {
        console.log(err);
      }
    }, 3000);
  });
};

// Then-Catch
cekHariKerja('RAbu')
  .then((res) => (
    console.log(
      `${res[0].toUpperCase()}${res.substring(1)} adalah hari kerja. (dari Then-Catch)`
    )
  ))
  .catch((err) => console.log(`${err}. (dari Then-Catch)`));

// Try-Catch
try {
  cekHariKerja('minggu') // Input: hariValid(hariIni) || hariValid('minggu') || hariValid('kAMis') || hariValid('k@Mis')
    .then((res) => (
      console.log(`${res[0].toUpperCase()}${res.substring(1)} adalah hari kerja. (dari Then Try-Catch)`)
    ))
    .catch((err) => (
      console.log(`${err}. (dari Then Try-Catch)`)
    ))
}
catch (err) { console.log(err) };



// PENJELASAN
// PENJELASAN TRY-CATCY DAN THEN-CATCH

// Then-Catch digunakan untuk melaporkan jika program error sesuai perintah user,
// setelah mendapat hasil 'resolve' atau 'reject' dari 'Promise'.
// Method.then dapat dibuat lebih dari sekali dengan syarat ada return dari 'Then' sebelumnya.
// Syntax membuat Promise:
// variabel = new Promise(resolve, reject) => {
//   if() { resolve() } else { reject() }
// }
// Syntax menampilkannya ke then-catch :
// variabel()
//  .then(() => ())
//  .catch(() => ())

// Try-Catch dapat langsung digunakan untuk melaporkan jika program error sesuai perintah user.
// Lebih cocok dipakai bersama async-await.
// Syntax try-catch :
// try{}
// catch(){}