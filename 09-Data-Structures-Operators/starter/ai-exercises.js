////////////////////////////
// Ejercicios Extra: ///////
////////////////////////////

// // // // // // // // ///
// Destructuring Arrays ///
// // // // // // // // ///

// Intercambiar Variables
// let g = 1;
// let h = 2;
// [h, g] = [g, h];
// console.log(g); // 2
// console.log(h); // 1

// Desestructuración con Valores Predeterminados
// const array = [1];
// const [a, b = 2] = array;
// console.log(a); // 1
// console.log(b); // 2

// Desestructuración de Arrays Anidados
// const array = [1, [2, 3], 4];
// const [a, [b, c], d] = array;
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// console.log(d); // 4

// Ignorar Elementos
// const array = [1, 2, 3, 4, 5];
// const [a, , b, , c] = array;
// console.log(a); // 1
// console.log(b); // 3
// console.log(c); // 5

// // // // // // // // / ///
// Destructuring Objects ///
// // // // // // // // ///

// Asignar a Nuevos Nombres de Variables
// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York',
// };

// const { name: personName, city: personCity, age: personAge } = person;

// console.log(personName); // John
// console.log(personAge); // 30
// console.log(personCity); // New York

// Valores Predeterminados
// const person = {
//   name: 'John',
//   age: 30,
// };

// const { name, age, city = 'Unknown' } = person;

// console.log(name); // John
// console.log(age); // 30
// console.log(city); // Unknown

// Desestructuración de Objetos Anidados
// const person = {
//   name: 'John',
//   address: {
//     city: 'New York',
//     zip: 10001,
//   },
// };

// const {
//   name,
//   address: { city, zip },
// } = person;

// console.log(name); // John
// console.log(city); // New York
// console.log(zip); // 10001

// Desestructuración en Parámetros de Función
// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York',
// };

// function displayPerson({ name, age, city }) {
//   console.log(name); // John
//   console.log(age); // 30
//   console.log(city); // New York
// }

// displayPerson(person);
