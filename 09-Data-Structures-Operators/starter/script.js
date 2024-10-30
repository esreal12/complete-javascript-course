// * Section 9 Data Structures, Modern Operators and Strings
('use strict');

console.log(
  `%c-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶\n%c// Section 9 \n\n%c// ⏃ Data Structures, \n// Modern Operators and Strings \n%c-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶-̶`,
  `color: orange; font-size: 12px; font-weight: bold; background:orange; padding:1px; margin-bottom:12px; border-radius:15px;`,
  `color: #6721ff; font-size: 20px; font-weight: bold; background: white; padding: 2px; border-radius:5px;`,
  `color: #72f71f; font-size: 18px;`,
  `color: orange; font-size: 12px; font-weight: bold; background:orange; padding:1px; margin-top:12px; border-radius:15px`
);

// function styledLog(message, style) {
//   console.log(`%c${message}`, style);
// }
// styledLog(
//   'Mensaje con fondo azul y texto en blanco',
//   'background: blue; color: white; padding: 4px; border-radius: 4px;'
// );

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ time, address, mainIndex, startIndex }) {
    console.log(`
      Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]}
      will be delivered to ${address} at ${time}.
    `);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with a grace of ${ing1}, a divine taste of ${ing2} and the perpetual flavor dance of ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// console.log(restaurant);

// * DESTRUCTURING ARRAYS //////////////////
// const arr = [2, 3, 4];
// ESTO:
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// ES LO MISMO QUE ESTO:
// const [a, b, c] = arr;
// console.log(a, b, c);

// const [firstCategory, secondCategory] = restaurant.categories;

// let [primero, , tercero] = restaurant.starterMenu;

// -> Reverse variable
// const temp = primero;
// primero = tercero;
// tercero = temp;
// console.log(primero, tercero);

// [primero, tercero] = [tercero, primero];
// console.log(primero, tercero);

// Receive 2 returned values from a function
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// -> Nested destructuring
// const nest = [2, 3, 4, [5, 6]];
// const [f, , , t] = nest;
// const [x, , y, [v, u]] = nest;
// console.log(f, t);
// console.log(`----------`);
// console.log(x, y, v, u);

// -> Defaul values
// const [p = 1, q = 1, r = 'siéntalo'] = [8, 4];
// console.log(p, q, r);

// * DESTRUCTURING OBJECTS //////////////////
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// -> Asignar un nuevo nombre de variable, útil para API Calls
// const { name: restName, openingHours: hours, categories: cat } = restaurant;
// console.log(restName, hours, cat);

// -> Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// -> Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 4, b: 5, c: 6 };
// ({ a, b } = obj);
// console.log(a, b, obj);

// -> Destructuring Nested Objects
// ? Aquí la destructuración reconoce elementos de la propiedad
// ? openingHours, quiere decir que reconoce texto y lo asocia
// ? con lo que haya dentro del objeto.
// const {
//   sat: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const persona1 = {
//   name: 'Israel',
//   age: 33,
//   jobs: {
//     first: 'Designer',
//     second: 'Web Developer',
//   },
//   homeTown: 'San José',
// };

// console.log(persona1);

// const { jobs: trabajos } = persona1;
// console.log(trabajos);

// const {
//   jobs: { first: fst, second: snd },
// } = persona1;
// console.log(fst, snd);

// * OPERADOR ... //////////////////
// ? Forma antigua y actualmente incorrecta
// const arr = [7, 8, 9];
// const badNewArr = [5, 6, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// -> El nuevo método ...
// const goodOlNewArr = [5, 6, ...arr];
// console.log(goodOlNewArr);

// console.log(...arr);
// console.log(7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// copy array
// const copyNewArr = [...restaurant.mainMenu];
// console.log(copyNewArr);

// Join 2 arrays
// const newJoinedArrays = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(newJoinedArrays);

// ? Iterables: arrays, strings, maps, sets, NOT Obj.
// const str = 'Israel';
// const letters = [...str, ' ', ...'Umaña Sedó'];
// console.log(letters);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   startIndex: 2,
// });

// const ingredients = [
//   prompt("Let's make pasta!!! Ingredient 1?"),
//   prompt('Ingredient 2? We are almost done!'),
//   prompt('And finally, Ingredient 3?'),
// ];
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// const restaurantCopy = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: 'Israel Umaña Sedó',
// };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy);

// *  REST PATTERN & PARAMETERS //////////////////

// -> This is SPREAD because the ... is on the right side of the evaluation.
// const arr = [1, 2, ...[3, 4]];

// -> This is REST because the ... is on the left side of the evaluation.
/*
  ? Se llama REST porque toma el resto de elementos de un array y lo convierte en un array nuevo
  ? Collects the unused elements in the destructuring assignment after the last variable.
  ? No incluye elementos saltados "skipped (, ,)"
  ? Siempre debe estar al final del structuring assignment
*/
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, , bruchetta, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, bruchetta, otherFood);

// ~ REST Pattern in Objects
// const { fri, ...weekdays } = restaurant.openingHours;
// console.log(fri, weekdays);

// ~ REST Pattern in Functions

// const test = (...numbers) => {
//   console.log(numbers);
// };

// test([5, 4, 3, 2, 2], [2,3]);
// test(2, 3, 4, 5);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(
//   Number('Andrés'.length),
//   Number('Israel'.length),
//   Number('Umaña'.length),
//   Number('Sedó'.length)
// );
// add(
//   Number('Emilia'.length),
//   Number('María'.length),
//   Number('Vargas'.length),
//   Number('Zúñiga'.length)
// );
// add(5, 6, 7);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [44, 33, 22];
// add(...x);

// restaurant.orderPizza('ajos', 'pollo', 'tocineta', 'cladimia');
// restaurant.orderPizza('ajos');

// * SHORT CIRCUITING: || AND &&
// ? Use ANY data type, return ANY data type,
// ? short-circuiting

// console.log(`<-------- OR -------->`);
// console.log(3 || 'Israel'); // 3
// console.log('' || 'Israel'); // Israel
// console.log(true || 0); // true
// console.log(undefined || null); // null

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello'

// restaurant.numGuests = 20;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// -> Esto es lo mismo de arriba pero más corto
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(`<-------- AND -------->`);
// console.log(0 && 'Israel');
// console.log(7 && 'Israel');

// -> Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// Es lo mismo que
// if (restaurant.orderPizza) restaurant.orderPizza('mushrooms', 'spinach');
// Que es lo mismo que
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// -> THE NULLISH COALESING OPERATOR ??
// console.log(`<-------- THE NULLISH COALESING OPERATOR ?? -------->`);
// Nullish: null and undefined (NOT 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// * LOGICAL ASSIGNMENT OPERATORS
// -> OR Assignment Operator ||=
console.log(`<------- OR Assignment Operator ||= -------->`);
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// Esto
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// es lo mismo que decir
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(`<------- Nullish Assignment Operator ??= -------->`);

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(`<------- AND Assignment Operator &&= -------->`);
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// * OPTIONAL CHAINING (?.)
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// - With ?.
// console.log(restaurant?.openingHours?.mon?.open);
// Si existe openingHours, continúa al siguiente parámetro, si este existe, continua.

// * Looping Objects: Object Keys, Values, and Entries
// for (const day of Object.keys(openingHours)) {
// }

// * SETS
// ? A SET is a collection of unique values, No duplicates.
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('Israel'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// ordersSet.clear();

// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set('AndrésIsraelUmañaSedó').size);

// * MAPs: Fundamentals
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// console.log(rest.set('name', 'Classico Italiano'));
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest);

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// rest.clear();
// al hacerlo una variable ([1, 2]) se crea una sola dirección en la memoria
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set('Heading', document.querySelector('h1'));
// const heading = rest.get('Heading');

// heading.style.color = 'yellow';

// console.log(rest);
// console.log(rest.size);
// Los arrays [1, 2] no son el mismo objeto en el HEAP
// console.log(rest.get(arr));
// You can use objects as MAP KEYS

// * MAPS ITERATION
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🥳🎉🎊🍾'],
//   [false, 'Try again!'],
// ]);

// console.log(question);
// Todo esto es lo mismo que decir:

// CONVERT OBJECTS TO MAPS
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

// Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = prompt('Your answer: ');
// const answer = 3;
// console.log(answer);
// console.log(question.get(Number(answer) === question.get('correct')));
// console.log(question.get(question.get('correct') === answer)); // wrong

// -> Convert MAP to ARRAY
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
