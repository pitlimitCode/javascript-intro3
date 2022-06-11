// inspirasi : 
// validasi login (name dan password)
// hari ini ada kelas tidak, kalau ada prepare, kalau proses, stand by, kalau tidak lanjut turu.
// klo bisa method.then yang ada return2 nya banayk
// program yg pake async await juga mau?


// 3. Buat 2 program bebas menggunakan promise seperti soal nomor 1
// Program bebas 1
const cekHariKerja2 = (day) => {
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
    }, 3000)
  })
}
// console.log(cekHariKerja2);








// // Please input a number between 5 and 10:
// function myFunction() {
//   let x = 2;
//   try {
//     if(x == "") throw "empty";
//     if(isNaN(x)) throw "not a number";
//     x = Number(x);
//     if(x < 5) throw "too low";
//     if(x > 10) throw "too high";
//   }
//   catch(err) {
//     console.log("Input is " + err);
//   }
// }
// myFunction();