
## SOAL NOMOR 1
Buatlah sambungan program menggunakan then catch dan juga try catch untuk mengecek hari kerja dari kode Asynchronous dibawah dan jelaskan penggunaan then catch dan try catch dengan memberikan komentar di bawahnya:
const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

## SOAL NOMOR 2
Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map
const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};


## SOAL NOMOR 3
Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1

## SOAL NOMOR 4
Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini
https://jsonplaceholder.typicode.com/users