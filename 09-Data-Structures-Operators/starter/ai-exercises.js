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

//  THE SPREAD OPERATOR EXERCISES
// Beginner
// Array Combination: Use the spread operator to combine these
// two arrays into one.

// const colors1 = ['red', 'green'];
// const colors2 = ['blue', 'yellow'];
// Your solution here
// const allColors = [...colors1, ...colors2];
// console.log(allColors);

// Clone an Object: Clone the user object below without directly
// modifying it.
// const user = { name: 'Alice', age: 25 };
// Your solution here
// const userClone = { ...user };
// userClone.name = 'Israel';
// console.log(userClone);

// Add Property to Object: Add a location property to the user
// object while keeping the original properties intact.
// const user2 = { name: 'Bob', age: 30 };
// Your solution here
// const user2Clone = { ...user2 };
// user2Clone.location = 'Costa Rica';
// console.log(user2Clone);

// Intermediate
// Merge Multiple Arrays: Merge the three arrays into a new array.
// const fruits = ['apple', 'banana'];
// const vegetables = ['carrot', 'broccoli'];
// const grains = ['rice', 'wheat'];
// Your solution here
// const food = [...fruits, ...vegetables, ...grains];
// console.log(food);

// Merge and Update Object: Using the spread operator, create a
//userInfo object with the properties of user and extraInfo,
// but update the age property to 30.
// const user3 = { name: 'Chris', age: 20 };
// const extraInfo = { location: 'New York', occupation: 'Developer' };
// Your solution here
// const userInfo = { ...user3, ...extraInfo };
// userInfo.name = 'Israel';
// userInfo.age = 35;
// userInfo.location = 'Costa Rica';
// userInfo.occupation = 'Web Designer / Founder';

// console.log(user3);
// console.log(extraInfo);

// console.log(userInfo);

// Function Arguments: Write a function that takes any number of
// arguments and returns the product of all arguments.
// Use the spread operator to pass elements of an array as
// arguments to this function.
// const nums = [2, 3, 4];
// function multiply(a, b, c) {
  // Your solution here
//   return a * b * c;
// }
// console.log(multiply(...nums));

// Advanced
// Deep Clone an Object: Clone the nested object below without
// modifying the original. Avoid using any external libraries.
// const nestedObject = {
//   name: 'Deep',
//   info: {
//     age: 35,
//     skills: ['coding', 'design'],
//   },
// };
// Your solution here
// const nestedOjectCopy = { ...nestedObject };
// nestedOjectCopy.name = 'Israel';
// nestedOjectCopy.info.age = 35;
// console.log(nestedObject);
// console.log(nestedOjectCopy);

// Conditional Spread: Using spread syntax, merge the
// defaultSettings and userSettings objects, but only include
// properties from userSettings that have non-null values.

// const defaultSettings = { theme: 'dark', notifications: true };
// const userSettings = { theme: null, notifications: false };
// Your solution here

// const mergedSettings = { ...defaultSettings, ...userSettings };


// Complex Merge: Combine the two arrays and two objects below, 
// and then pass the merged array and object properties as 
// arguments to a function.

// const nums1 = [1, 2];
// const nums2 = [3, 4];
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// function display(argsArray, argsObject) {
//   console.log('Array:', argsArray);
//   console.log('Object:', argsObject);
// }
// Your solution here
// const nums3 = [...nums1, ...nums2];
// const obj3 = { ...obj1, ...obj2 };

// display(nums3, obj3);


// TODO
// REST Exercises in chat gpt first to explain the topic and then some practice 