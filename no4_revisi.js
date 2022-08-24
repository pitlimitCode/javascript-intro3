import fetch from "node-fetch";

// 4. Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini {https://jsonplaceholder.typicode.com/users}
console.log('~~~~~ SOAL NOMOR 4: ~~~~~');
console.log('');

async function soalEmpat(link, req) {
  // Validasi jika '' atau tidak ada Key Object
  if (req === undefined || req === "") {
    console.log("Tidak ada Key Object yang dimasukkan.");
  } else {
    // Method Fetch
    try{
      const response = await fetch(link);
      const allData = await response.json();

      allData.forEach(data => {

        // req == 'all' untuk menampilkan semua data
        if (req == "all") {
          console.log(data);
        } else {

        // cetak spesifik data, contoh 'data.nama'
          let cetak = data[req]; 
          console.log(cetak);
        }

      })
    } catch (err) {
      console.log(err)
    };
  }
}
// PERINTAH jika tidak memenuhi validasi
// soalEmpat('https://jsonplaceholder.typicode.com/users');
// soalEmpat('https://jsonplaceholder.typicode.com/users', '');

// PERINTAH-perintah utama:
soalEmpat("https://jsonplaceholder.typicode.com/users", "name");
// soalEmpat('https://jsonplaceholder.typicode.com/users', 'company');
// soalEmpat('https://jsonplaceholder.typicode.com/users', 'naMe');

// soalEmpat('https://jsonplaceholder.typicode.com/userss', 'all');