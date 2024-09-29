'use strict';

// l127: section intro
// higher order fx, bind method, closures

/*
// l129: default parameters
const bookings = [];

// we can have defualt value as the expression. can declare the fx parameters which we declared prev from curr in value field
const createBooking = function(flightNum, numPassengers=0, price=12*34*numPassengers){

    // setting default values before ES6
    // flightNum = flightNum ?? 0;
    // numPassengers = numPassengers ?? 0;
    // price = price ?? 0;

    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH13',23,34);
createBooking('LH13',undefined,34);// we can not skip the default parameters. use undefined to skip a defualt parameter
*/

/*
// l130: how passing arguments works: value vs reference
const flight = 'LH234';// primitive type
const jonas = {
    name: 'Jonas kumar',
    passport: '1234567890',
}; // reference type

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';// passing a primitve type to a fx is same as creating new variable
    passenger.name = 'Mr. Jonas kumar';// jonas object will change. when we pass a reference type to a fx refernce to the bojet in the memory heap, but they point to same object in the memory

    if(passenger.passport === '1234567890'){
        alert('Checked In');
    }else alert('Wrong Passport');

}

checkIn(flight,jonas);
console.log(flight);// LH234
console.log(jonas);// name will be changed

// same as above
let flightNum = flight;
let passenger = jonas;
flightNum = 999;// variable copy will change
passenger = {
    name: 'sanjay',
}// jonas object will not change as whole address is changed
console.log(flight);
console.log(jonas);
console.log(passenger);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*100000000000);
}

// beware of passing object to fx as object value can be changed. mupliple fxs which are manuplulating the same object is dangerous
newPassport(jonas);
checkIn(flight,jonas);

// passing by pass/refernce
// JS has no passing by reference, only passing by value is there. for object we are passing by value, we are just passing the memory address of the object in a new variable
*/

/*
// l131: first class and higher order fx
// first class fx enables us to write higher order fx

// first class fx
// JS treats fx as first class citizens, this means that fx are simply VALUES. fx are just another TYPE of object.

// since objects are values we can use fx as many ways
// 1. store fx in variables or methods
const add = (a, b) => a + b;
const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

// passing fx as arguments like in event listerner fx to objects

// we can return fx from other fx.

// we can call methods on fx
// counter.inc.bind(fx);

// Higher order fx
// a fx that either receives anther fx as an argument or a fx that recieves a new fx or both. this is only possible bcs of first class fxs
// 1. fx that receives another fx
const greet = () => console.log(`hey jonas`);
btn.addEventListner('click', greet); // here addEventListner is a higher order fx and greet fx is a first class fx aka callback fx.

// 2 fx that returns new fx
function count() {
  let cnt = 0;
  return function () {
    cnt++;
  };
}// here count is a higher order fx which is returning a fx.

// diff between first class fx and higher order fx
// they are diff
// first class fx: its just a feature. all this means is fx is value. it is a concept.
// bcs the lang supports first class fx higer order for possible
*/

/*

// l132: fxs accepting callback fxs
const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const [firstWord, ...otherWords] = str.split(' ');
    return [firstWord.toUpperCase(), ...otherWords].join(' ');
}

// higher order fx: takes in a fx
const transformer = function(str, fx){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fx(str)}`);

    // fxs has properties and methods
    console.log(`Transformed by: ${fx.name}`);
}

// passing a callback fx(we do not call them self but JS will call them) to higher order fx
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);


// js uses callbacks all the time
let cnt = 1;
const high5 = function(){
    console.log(`(⌐■_■) ${cnt++}`);
}

// eg1
document.body.addEventListener('click', high5);// here addevenlister is a higher order fx and high5 is callback fx

// eg2: higher orderfx
['Jonas', 'Martha', 'Adam'].forEach(high5);

// why are call back fxs used in js?
// 1. make our code more reusable and interconnnected parts.
// 2. call back fxs allows us to create abstraction(hide the code implementaion).  more about abstracion in OOPS.
*/

// l133: fx returning fx
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterMorning = greet('Good morning,');
greeterMorning('Sunil');
greeterMorning('Jonas'); //greeting varibale is comming from greet fx. it is possible because of clousers.

greet('Hello,')('Sunil');

// why fx returning fx? -> will be useful in programming paradigm in functinal programming.

// challenge: above fx using arrow fx
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hey,')('Kumar');
