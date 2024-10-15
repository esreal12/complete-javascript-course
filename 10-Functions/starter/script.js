'use strict';

const flight = 'LH234';
const israel = {
  name: 'Israel Umaña Sedó',
  passport: 181818181,
};
const checkIn = (flightNum, passenger) => {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 181818181) {
    alert('CHECKED IN');
  } else {
    alert('WRONG PASSPORT!');
  }
};
// checkIn(flight, israel);
// console.log(flight);
// console.log(israel);

// Is the same as doing...
const flightNum = flight;
const passenger = israel;

const newPassport = person => {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(israel);
checkIn(flight, israel);
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// const cb = (a, b, c, d) => {
//   createBooking(a, b, c, d);
// };

// cb('LH123');
// cb('LH134', undefined, 1000);
// cb('LH134', 3);
