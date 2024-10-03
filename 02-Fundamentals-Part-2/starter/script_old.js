'use strict'; // Let us see errors that without it would be impossible to see.

// Dar estilo en la consola
const colorStyleConsole = (
    pText,
    pColor,
    pFontStyle,
    pFontSize
) => {
    const textMix = `%c` + pText;
    const color = `color:` + pColor + `;`;
    const fontStyle = `font-style:` + pFontStyle + `;`;
    const fontSize = `font-size:` + pFontSize + `;`;
    const background = `background: black; border-radius: 4px; padding: 5px;`;
    const stylesMix = color + fontStyle + fontSize + background;
    console.log(textMix, stylesMix);
}

// //////////////////////////////////// 
// Functions
// Function declaration
// function calcAge1 (birthYear) {
//     return 2021 - birthYear;
// }
// const age1 = calcAge1(1989);
// //////////////////////////////////// 

// //////////////////////////////////// 
// Anonymous Function
// const calcAge2 = function (birthYear) { 
//     return 2021 - birthYear;
// }
// const age2 = calcAge1(1989);
// console.log(age1, age2);
// //////////////////////////////////// 

// //////////////////////////////////// 
// Arrow functions
// //////////////////////////////////// 
// const calcAge3 = birthYear => 2021 - birthYear;
// const age3 = calcAge3(1989);
// console.log(age3);
// //////////////////////////////////// 

// //////////////////////////////////// 
// Arrow function with more calculations
// //////////////////////////////////// 
// const yearsUntilRetirement = birthYear => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return retirement; // Return is necessary to point out which value to return.
// }
// const yur = yearsUntilRetirement(1989);
// console.log(yur);
// //////////////////////////////////// 

// //////////////////////////////////// 
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}`
// }
// console.log(yearsUntilRetirement(1989, `Israel`));
// console.log(yearsUntilRetirement(1991, `Sebastián`));
// //////////////////////////////////// 

// //////////////////////////////////// 
// function cutFruitPieces (fruit) {
//     return fruit * 4;
// }

// function fruitProcesor (apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//     return juice;
// }

// console.log(fruitProcesor(5, 9));
// //////////////////////////////////// 

// const calcAge = function(birthYear) {
//     return 2021 - birthYear;
// }

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}`
// }


////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1 /////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, 
which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters 
('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, 
according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// // Test 1
// let avgDolphins = Math.round(calcAverage(44, 23, 71));
// let avgKoalas = Math.round(calcAverage(65, 54, 49));

// function checkWinner(pAvgDolphins, pAvgKoalas) {
//     if(pAvgDolphins >= 2 * pAvgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})! 🏆`);
//     } else if (pAvgKoalas >= 2 * pAvgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})! 🏆`);
//     } else {
//         console.log(`No winner.`);
//     }
// };
// checkWinner(avgDolphins, avgKoalas);

// // Test 2
// avgDolphins = Math.round(calcAverage(85, 54, 41));
// avgKoalas = Math.round(calcAverage(23, 34, 27));

// checkWinner(avgDolphins, avgKoalas);





////////////////////////////////////////////////////////////////////////////////////////////////////
// ARRAYS //////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// Forma 1
// const friends = [`Michael`, `Steven`, `Peter`];

// // Forma 2
// const y = new Array(1991, 1984, 2008, 2021);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(y[y.length - 1]); // El número de items en el array es de 4 [0, 1, 2, 3], pero como
// // necesitamos conocer el valor del último item del array, lo que hay que hacer es restarle -1
// // para que la posición del ítem sea 3, ya que se inicia desde 0.

// friends[2] = `Israel`;
// console.log(friends);
// // friends = [`Bob`, `Alice`]; // Not legal porque como estructura de almacenamiento de datos, ya fue declarada
// // en una constante más arriba, sólo los valores pueden cambiar.

// const firstName = `Israel`;
// const israel = [firstName, `Umaña`, (2021 - 1989), `Web Designer`, friends];
// console.log(israel);
// console.log(israel.length);

// // Excercise
// const calcAge = birthyear => 2021 - birthyear;
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length -1]); // util cuando no sabemos la longitud del array
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];
// console.log(ages);




////////////////////////////////////////////////////////////////////////////////////////////////////
// ARRAY METHODS ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

const friends = [`Michael`, `Steven`, `Peter`];
// console.log(friends);

// // AGREGAR ///////////////////////////////
// // PUSH
// colorStyleConsole("+ Agregar:", "yellowgreen", "bold", "15px");
// colorStyleConsole(`➤ Se agrega un nuevo item al final del array usando PUSH();
// en este caso el nuevo item es 'Israel'`);
// const newLenght = friends.push(`Esreal`); // Esta función retorna el nuevo Length.
// console.log(`Lista de amigos: ` + friends.join(', ') + `.`);
// console.log(`Nueva longitud del array: ` + newLenght);
// console.log(friends);
// console.log('');
// // UNSHIFT
// colorStyleConsole(`➤ Se agrega un nuevo item al inicio del array usando UNSHIFT();
// en este caso el nuevo item es 'Shebillo'`); 
// const unshiftted = friends.unshift('Shebillo');
// console.log(`Lista de amigos: ` + friends.join(', ') + `.`);
// console.log(`Nueva longitud del array: ` + unshiftted);
// console.log(friends);
// console.log('');

// // REMOVER ///////////////////////////////
// // POP
// colorStyleConsole("- Remover:", "yellowgreen", "bold", "15px");
// colorStyleConsole(`➤ Se remueve el item al final del array POP();
// en este caso desaparece 'Esreal'`); 
// const popped = friends.pop(); // Esta funcion retorna el elemento eliminado
// console.log(`Lista de amigos: ` + friends.join(', ') + `.`);
// console.log(`Item eliminado: ` + popped);
// console.log(friends);
// console.log('');
// // SHIFT
// const shifted = friends.shift(); // Esta funcion retorna el elemento eliminado
// colorStyleConsole(`➤ Se remueve el item al inicio del array SHIFT();
// en este caso desaparece 'Shebillo'`); 
// console.log(`Lista de amigos: ` + friends.join(', ') + `.`);
// console.log(friends);
// console.log(`Item eliminado: ` + shifted);
// console.log('');

// // INDEX OF
// colorStyleConsole("🔎 Index Of:", "yellowgreen", "bold", "15px");
// colorStyleConsole(`➤ Se utiliza para saber la posición de un item del array,
// en este caso vamos a buscar la posición del item 'Michael'`); 
// console.log(friends);
// console.log(`friends.indexOf('Bob') = ` + friends.indexOf('Bob') + ` por no existir en el array.`);
// console.log(`friends.indexOf('Michael') = ` + friends.indexOf('Michael') + ` por encontrarse en la primera posición.`);
// console.log(`friends.indexOf('Steven') = ` + friends.indexOf('Steven') + ` por encontrarse en la segunda posición.`);
// console.log(`friends.indexOf('Peter') = ` + friends.indexOf('Peter') + ` por encontrarse en la tercera posición.`);

// // Modern and more useful ES6 "IndexOf" method 
// colorStyleConsole("🔎 Modern and more useful ES6 'IndexOf' method 'Includes()':", "yellowgreen", "bold", "15px");
// colorStyleConsole(`➤ Se utiliza para saber si un item existe o no en un array. Usa 'Strict Equality ==='
// por lo que dará FALSE si buscamos por ejemplo un número utilizado un string.`); 
// friends.push(31);
// console.log(friends);
// console.log(`friends.includes('Bob') = ` + friends.includes('Bob'));
// console.log(`friends.includes('Michael') = ` + friends.includes('Michael'));
// console.log(`friends.includes('31') = ` + friends.includes('31'));
// console.log(`friends.includes(31) = ` + friends.includes(31));

// if (friends.includes('Steven')) {
//     console.log(`I have a friend called Steven`);
// }




///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: 
- Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, 
   calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). 
   Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44
*/
// Mi solucion
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
// console.log(`Bills: ` + bills.join(`, `));
// console.log(`Tips: ` + tips.join(`, `));
// console.log(`Total: ` + total.join(`, `));

// Solucion Jonas
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
// console.log(calcTip);
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
// console.log(bills, tips, total);







////////////////////////////////////////////////////////////////////////////////////////////////////
// OBJECTS /////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// const israel = {
//     firstName: `Israel`,
//     lastName: `Umaña Sedó`, 
//     age: 2021 - 1989,
//     job: `Web Designer`,
//     friends: [`Beto`, `Tebo`, `Krissia`, `Manu`]
// }
// console.log(israel);

// console.log(israel.lastName);
// console.log(israel['lastName']);

// const nameKey = 'Name';
// console.log(israel['first' + nameKey]);
// console.log(israel['last' + nameKey]);

// const interestedIn = prompt(`
//     What do you want to know about Israel?
//     Choose between firstName, lastName, age, job, and friends
// `);

// if (israel[interestedIn]) {
//     console.log(israel[interestedIn])
// } else {
//     console.log(`Wrong request! Choose between firstName, lastName, age, job, and friends`);
// }

// israel.location = `Costa Rica`;
// israel[`twitter`] = `@esreal12`;
// console.log(israel);

// console.log(`${israel.firstName} tiene ${israel.friends.length} amigos, y su mejor amigo se llama ${israel.friends[0]}`);




////////////////////////////////////////////////////////////////////////////////////////////////////
// OBJECTS METHODS /////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// const israel = {
//     firstName: `Israel`,
//     lastName: `Umaña Sedó`,
//     birthYear: 1989,
//     job: `Web Designer`,
//     friends: [`Beto`, `Tebo`, `Krissia`, `Manu`],
//     hasDriverLicense: true,

//     calcAge() { // si utilizo arrow function, se sale del scope del objeto y cuando logueo This veo el Window general.
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },

//     whoIs() {
//         this.infoEvaluated = `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} and, he has ${this.hasDriverLicense ? 'a' : 'no'} Drivers License`;
//         return this.infoEvaluated;
//     }
// };

// Israel is a 31 years old Web Designer and, he has a Drivers License;

// console.log(israel.calcAge());
// console.log(israel.whoIs());

// console.log(israel.infoEvaluated);

// console.log(israel.age);




////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #3 /////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). 
   Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. 
   Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const mark = {
//     fullName: `Mark Miller`,
//     mass: 78,
//     height: 1.69,

//     calcBMI() { 
//         this.BMI = Math.round(this.mass / (this.height ** 2)); 
//         return this.BMI;
//     }
// }
// console.log(mark.calcBMI());

// const john = {
//     fullName: `John Smith`,
//     mass: 92,
//     height: 1.95,

//     calcBMI() {
//         this.BMI = Math.round(this.mass / (this.height ** 2));
//         return this.BMI;
//     }
// }
// console.log(john.calcBMI());

// console.log(
//     mark.BMI > john.BMI ? 
//     `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!` :
//     `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`
// );





////////////////////////////////////////////////////////////////////////////////////////////////////
// LOOPING ARRAYS //////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


// const israel = [
//     `Israel`,
//     `Umaña Sedó`,
//     1989,
//     `Web Designer`,
//     [`Beto`, `Tebo`, `Krissia`, `Manu`],
//     true,
//     [`fre`, `as`, `casd`, `wer`]
// ];

// const types = [];

// // Array para mostrar arrays dentro de arrays. lol
// for (let i = 0; i < israel.length; i++) {
//     // Reading from israel array, if there is an array, entere and log the items, then continue.
//     if(Array.isArray(israel[i])){
//         for (let j = 0; j < israel[i].length; j++) {
//             console.log(israel[i][j]);
//         }
//     }
//     console.log(israel[i], typeof israel[i]);

//     // Filling types array
//     // types[i] = typeof israel[i]; // Método 1
//     types.push(typeof israel[i]);   // Método 2
// }
// console.log(types);

// Cálculos en arrays
const years = [1991, 2007, 2000, 1945, 1789, 1934, 2009];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}
console.log(`Ages: ` + ages);

// // Continue and Break
// console.log(`--------- ONLY STRINGS -----------`);
// for (let i = 0; i < israel.length; i++) {
//     if(typeof israel[i] !== 'string') continue;
//     console.log(israel[i], typeof israel[i]);
// }

// console.log(`--------- BREAK WITH NUMBER -----------`);
// for (let i = 0; i < israel.length; i++) {
//     if(typeof israel[i] === 'number') break;
//     console.log(israel[i], typeof israel[i]);
// }

// Looping an Array backwards
// Mi solución.
// console.log(`--------- BACKWARDS -----------`);
// console.log(`--------- Mi solución -----------`);
// for (let i = israel.length; i > -1; i--) {
//     console.log(i, israel[i]);
// }
// console.log(`--------- La solución de Jonas  -----------`);
// // La solución de Jonas, es la correcta
// for (let i = israel.length - 1; i >= 0; i--) {
//     console.log(i, israel[i]);
// }

// for (let excercise = 1; excercise < 4; excercise++) {
//     console.log(`------ Starting Excercise ${excercise} -------`);
    
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Excercise ${excercise}: Lifting wight repetition ${rep}`);
//     }
// }


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     // console.log(`WHILE:Lifting weights repetition ${rep}`);

//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while(dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log(`Loop is about to end...`);
// }


///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) 
for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. 
          This function calculates the average of all numbers in the given array. 
          This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' 
       that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. 
       This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]; //10
// const tips = [];
// const total = [];

// for(let i = 0; i < bills.length; i++){
//     tips.push(calcTip(bills[i]));
//     total.push(tips[i] + bills[i]);
// }

// const calcAverage = arr => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum / arr.length;
// };
// const avgTotal = calcAverage(total);

// // Sort Functions to order numbers
// const minToMax = (a, b) => a - b;
// const maxToMin = (a, b) => b - a;

// const totalSorted = total.sort(minToMax);

// console.log(bills);
// console.log(tips);
// console.log(total);
// console.log(totalSorted);
// console.log(avgTotal);

// console.log(bills, tips, total);
// console.log(`The total average is: ${avgTotal}`);