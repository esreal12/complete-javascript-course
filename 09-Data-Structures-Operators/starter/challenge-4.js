///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names 
written in underscore_case and convert them to camelCase.
*/
// const underscore_case;
// const underscoreCamelCase;

/*

The input will come from a textarea inserted into the 
DOM (see code below), and conversion will happen when 
the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the 
textarea 😉

HINT 2: The solution only needs to work for a variable made 
out of 2 words, like a_b

HINT 3: Start without worrying about the ✅. Tackle that 
only after you have the variable name conversion working 😉

HINT 4: This challenge is difficult on purpose, so start 
watching the solution in case you're stuck. Then pause and 
continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const button = document.querySelector('button');

// const convertToCamelCase = () => {
//   const text = document.querySelector('textarea').value;
//   const words = text.split(/\n/g);
//   let count = 0;
//   for (const [i, word] of words.entries()) {
//     if (word.includes('_')) {
//       word.toLowerCase();
//       const splittedWords = word.trim().split('_');
//       if (splittedWords.length !== 2) {
//         console.log(`The variable ${word} is not accepted.`);
//       } else {
//         const conversion =
//           splittedWords[0] +
//           splittedWords[1][0].toUpperCase() +
//           splittedWords[1].slice(1);

//         console.log(`${conversion.padEnd(20, ' ')} ${'✅'.repeat(i + 1)}`);
//       }
//     } else {
//       console.log(`The word "${word}" doesn't have _`);
//     }
//   }
// };

// button.addEventListener('click', convertToCamelCase);

///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

console.log(flights.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();

for (flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type
    .replaceAll('_', ' ')
    .trim()} from ${getCode(from)} to ${getCode(to)
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`.padStart(50);
  console.log(output);
}
