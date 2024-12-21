// for (let i = 0; i < 5; i++) {
//     console.log(`Angka ke-${i} adalah ${i}`);
// }

const person = [
    { name: 'Fulan', 
      origin: 'Bandung', 
      birthYear: 2024 },
    { name: 'Fulan', origin: 'Bandung', birthYear: 2024 }
];


// looping pertama untuk index
for (const index in person) {
    // console.log(index); //ambil index karena sudah masuk atau berupa array jadi object di 
                        // hitung sebagai value dari array 
                        // jadi harus pakai index untuk aksesnya  
    const value = person[index];
    // console.log(value);
    
    // console.log(`Person ${parseInt(index) + 1}:`);
    // loping kedua untuk akses 
    for (const key in value) {
        // console.log("ini key:" + key);
        // console.log("ini key:" + value);        
      console.log(`${key} bernilai ${value[key]}`);
      
    }
}
  

const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];

for (const item of names) {
  console.log(item);
}



for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
  }


  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
  
    console.log(i);
  }
