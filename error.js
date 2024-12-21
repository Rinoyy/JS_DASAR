// const price = 100;
// const paid = 80;

// if (paid < price) {
//   throw new Error('Pembayaran kurang');
// }

// try {
//     // console.log('Memulai program');
//     throw new Error('Error: Program berhenti');
//     // console.log('Mengakhiri program');
//   } catch (err) {
//     console.log('Karena ada error, blok ini akan dieksekusi');
//   }

// function divide(a, b) {
//     try {
//       if (b === 0) {
//         throw new Error("Pembagian dengan nol tidak diperbolehkan!");
//       }
//       return a / b;
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
  
//   console.log(divide(10, 2)); // 5
//   console.log(divide(10, 0)); // Error: Pembagian dengan nol tidak diperbolehkan!
  
async function fetchData() {
  try {
    let response =  await fetch("https://pokeapi.co/api/v2/pokemon-form/132/")
    console.log(response);
    
  } catch (error) {
    console.log(error.message);    
  }

}

fetchData();


//   Finally akan di jalankan tidak perduli error atau tidak