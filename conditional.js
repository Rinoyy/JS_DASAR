const dayif = new Date().getDay();

if (dayif === 0) {
  console.log('Minggu');
} else if (dayif === 1) {
  console.log('Senin');
} else if (dayif === 2) {
  console.log('Selasa');
} else if (dayif === 3) {
  console.log('Rabu');
} else if (dayif === 4) {
  console.log('Kamis');
} else if (dayif === 5) {
  console.log('Jumat');
} else if (dayif === 6) {
  console.log('Sabtu');
} else {
  console.log('Hari tidak valid');
}



const daySwitch = new Date().getDay();

switch (daySwitch) {
  case 0:
    console.log('Minggu');
    break;
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log('Jumat');
    break;
  case 6:
    console.log('Sabtu');
    break;
  default:
    console.log('Hari tidak valid');
}
