import fetch from "node-fetch";

// 4. Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini {https://jsonplaceholder.typicode.com/users}
async function restAPI(link, req) {
  // Validasi jika '' atau tidak ada Key Object
  if (req === undefined || req === "") {
    console.log("Tidak ada Key Object yang dimasukkan.");
  } else {
    // Method Fetch
    try{
      const response = await fetch(link);
      const allData = await response.json();

      allData.forEach((data) => {
        // req == 'all' untuk menampilkan semua data
        if (req == "all") {
          console.log(data);
        } else {
          let cetak = data[req]; // cetak spesifik data, contoh 'data.nama'
          console.log(cetak);
        }

      throw err = response;

      });
    } catch (err) {console.log(err)}
  }
}
// PERINTAH jika tidak memenuhi validasi
// restAPI('https://jsonplaceholder.typicode.com/users');
// restAPI('https://jsonplaceholder.typicode.com/users', '');

// PERINTAH-perintah utama:
// restAPI("https://jsonplaceholder.typicode.com/users", "name");
// restAPI('https://jsonplaceholder.typicode.com/users', 'company');
// restAPI('https://jsonplaceholder.typicode.com/users', 'naMe');

restAPI('https://jsonplaceholder.typicode.com/userss', 'all');
