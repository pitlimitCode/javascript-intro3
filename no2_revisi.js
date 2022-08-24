// 2. Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map
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

const mapMethod = (nol, months) =>
  new Map(months.forEach((month) => console.log(month)));

getMonth(mapMethod);