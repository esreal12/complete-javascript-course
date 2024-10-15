'use strict';

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// BONUS: Create an object called 'scorers' which contains the
// names of the players who scored as properties, and the number
// of goals as the value. In this game, it will look like this:
//      {
//        Gnarby: 1,
//        Hummels: 1,
//        Lewandowski: 2
//      }

// 1. Loop over the game.scored array and print each player name
// to the console, along with the goal number
// (Example: "Goal 1: Lewandowski")

// const scored = game.scored.entries();
// for (const [i, player] of scored) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// 3. Print the 3 odds to the console, but in a nice formatted way,
// exaclty like this:
//      Odd of victory Bayern Munich: 1.33
//      Odd of draw: 3.25
//      Odd of victory Borrussia Dortmund: 6.5
//    Get the team names directly from the game object,
//    don't hardcode them (except for "draw").
//    HINT: Note how the odds and the game objects
//    have the same property names 😉

// Solucion con Object.entries
const odds = Object.entries(game.odds);

// Mi solución
// for (const [key, value] of odds) {
//   console.log(`
//     Odd of ${key !== 'x' ? `victory ${game[key]}:` : 'draw:'} ${value}
//   `);
// }

// Jonas Solución
for (const [team, odd] of odds) {
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// 2. Use a loop to calculate the average odd and log it to the console
// (We already studied how to calculate averages,
// you can go check if you don't remember).

// const odds = Object.values(game.odds);
// console.log(odds);
// console.log(Object.values(odds), typeof Object.values(odds));
// console.log(Object.keys(odds), typeof Object.keys(odds));
// console.log(Object.entries(odds), typeof Object.values(odds));
// console.log(...odds);

// mi solución
// let sum = 0;
// let lastEl = odds[odds.length - 1];

// for (const odd of odds) {
//   let avg = (sum += odd) / 3;
// No siempre voy a saber el largo de un array, es por eso que es mejor
// aplicar el método de Jonas (abajo).length
//   odd === lastEl && console.log(`The average odd is ${avg}`);
// }

// La solución de Jonas
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);
