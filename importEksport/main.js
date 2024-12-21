import { myFunction } from "./another.mjs";  //import tanpa alias
import { myFunction as userFunction } from "./another.mjs"; //import dengan alias
import { myFunction as customerFunction } from "./user.js";
// import { name, email, age } from './another.mjs'; //Ketika yang di import sedikit
import * as variable from './another.mjs'; //ketika yang di import sangat banyak

myFunction();

userFunction();
customerFunction();

// // console.log(name);  ketika pakai manual
// console.log(variable.name);
// console.log(variable.email);
// console.log(variable.age);