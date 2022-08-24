// 3. Buat 2 program bebas menggunakan promise seperti soal nomor 1
console.log('~~~~~ SOAL NOMOR 3: ~~~~~');
console.log('');

// PROGRAM BEBAS 1
const timePres = (timer, youStop) => {
  return new Promise((resolve, reject) => {
    const nD = new Date();

    // waktu berhenti presentase / youStop
    let ys;
    if (nD.getSeconds() + youStop > 59) {
      ys = `${nD.getHours()}:${nD.getMinutes() + 1}:${nD.getSeconds() + youStop - 60 }`;
    } else {
      ys = `${nD.getHours()}:${nD.getMinutes()}:${nD.getSeconds() + youStop}`;
    }

    // batas waktu presentase
    let tmr;
    if (nD.getSeconds() + timer > 59) {
      tmr = `${nD.getHours()}:${nD.getMinutes() + 1}:${nD.getSeconds() + timer - 60 }`;
    } else {
      tmr = `${nD.getHours()}:${nD.getMinutes()}:${nD.getSeconds() + timer}`;
    }

    // setInterval, memproses dengan jarak/interval waktu
    let setIntervalFunct = setInterval(() => {
      // waktu yang berlangsung untuk ditampilkan / counting time
      const nD = new Date();
      let count = `${nD.getHours()}:${nD.getMinutes()}:${nD.getSeconds()}`;
      console.log(count);

      // keterangan di console saat melebihi waktu presentase
      if (count == tmr) {
        console.log(`
        MELEWATI BATAS WAKTU ...
        `);
      }

      // method untuk menghentikan setinterval
      function timeStopFunc() {
        clearInterval(setIntervalFunct);
      }

      // Promise resolve ke .then
      if (count == ys && count < tmr) {
        resolve(youStop);
        setTimeout(timeStopFunc, count);
      }

      // Promise reject ke .catch
      if (count == ys && count > tmr) {
        reject(youStop - timer);
        setTimeout(timeStopFunc);
      }
    }, 1000);
  });
};
// jalankan program bebas 1
{
  timePres(5, 10) // <<< INPUT !!! ~ (timer, youStop) = (10,5)
    .then((res) =>
      console.log(`
    SELESAI.
    ANDA TELAH PRESENTASE SELAMA ${res} detik.
  `)
    )
    .catch((err) =>
      console.log(`
    SELESAI. TAPI MELEBIHI BATAS WAKTU 
    PRESENTASE SEBANYAK ${err} DETIK.
  `)
    );
}


// PROGRAM BEBAS 2
// jalankan program bebas 2
{
  // const diajakNgumpul = (tOf, balas) => {
  //   return new Promise((resolve, reject = 100) => {
  //     setTimeout(() => {
  //       if (balas == null) {
  //         console.log('(*Abaikan)');
  //       } else if (tOf) {
  //         resolve(balas / 1000);
  //       } else {
  //         reject(balas / 1000);
  //       }
  //     }, balas);
  //   })
  // };
  // diajakNgumpul(false, 2000) // ( ? ~ true / false , waktu balas ~ milisecond )
  //   .then((res) => (console.log(`Membalas pesan, ${res} detik kemudian: Gaaas! (*siap-siap)`)
  //   ))
  //   .catch((err) => (console.log(`Membalas pesan, ${err} detik kemudian: Ngak. (*lanjut turu)`)
  //   ))
  //   .finally(console.log('Membaca pesan: Hmmm... (mikir)'));
}