"use strict";
/*
// l31 section intro
console.log(`Hello world`);
*/

/*
// l32: activating strict mode
// make js cide secure. 'use strict'; *MUST be first line of js file.
// why strict mode?
// 1. it forbids us to do certain things.
// 2. it creates visible errors in dev console, where in certain situations when js fails silently

// eg: mode will throw error if let, const, var is not used 
let hasDL = false;
const passTest = true;
// if(passTest) hasDLs = true;
if(hasDL) console.log(`I can drive.`);

// eg: error when using reserved js words
// const interface = 'sunil';
const private = 23;
// const if = 23;

// more on this later; such as for functions, objecs, setting properties on primitive values etc.
*/

/*
// l33: functions
// peice of code used again and again.
// DRY principle; maintainable code
function logger(){
    console.log(`My name is jonas`);
}

// calling/running/invoking a fx
logger();
logger();

// parametrized fx, arguments
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with  ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const juice = fruitProcessor(5, 0);
const juice2 = fruitProcessor(5, 4);
const log = logger(12,23,34);// specifying args will not have any effect
console.log(juice);
console.log(juice2);
console.log(log);

// console.log(), Number(), boolean() -> built-in fx
*/

/*
// l34 fx declarations vs expressions

// fx declaration
const age3 = calcAge(1991); // calling fx declaration before it's defined
console.log(age3)

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  return age;
}
const age1 = calcAge(1991);

// fx expression

// calling fx expression before defined, will not work bcs of hoisting
// const age = calcAge2(1991);
// console.log(age4);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2); //arguments are passed to fx, fx recieve parameters

// in js fx are just values
// fx expression can be a fail safe as we have to define a fx first to use it. else we can not call it.
*/

/*
// l35: arrow fx

function fx1() {}

const fx2 = function () {};

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// arrow fx: special form of fx expression
// 1 parameter
const calcAge3 = (birthYear) => 2037 - birthYear; // return is implicit in one liner fx

const age3 = calcAge3(1991);
console.log(age3);

// many parameters
const yearUnitilRetirement = (birthYear, firstName) => {
  const currAge = 2037 - birthYear;
  const retirementAge = 65 - currAge;
  // return retirementAge;
  return `${firstName} will retire after ${retirementAge} age.`;
};
console.log(yearUnitilRetirement(1991, 'Sunil'));

// arrow fx do not get a 'this' keyword
*/

// l36 fx calling other fx
/*
function fruitProcessor(apples, oranges){
  const applePieces = cutFruitPiece(apples);
  const orangePieces = cutFruitPiece(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
  return juice;
}

function cutFruitPiece(fruit){
  return fruit*4;
}

console.log(fruitProcessor(2,4));
*/

/*
// l37: reviewing fx
const yearUnitilRetirement = (birthYear, firstName) => {
  const currAge = 2037 - birthYear;
  const retirementAge = 65 - currAge;
  return `${firstName} will retire after ${retirementAge} age.`;
};

const calcAge = function(birthYear){
  const currAge = 2037 - birthYear;
  return currAge;
}

const yearUnitilRetirement2 = function(birthYear, firstName){
  const currAge = calcAge(birthYear);
  const retirementAge = 65 - currAge;
  if(retirementAge>=0) return retirementAge;
  else return -1;
  // return `${firstName} will retire after ${retirementAge} age.`;
}

console.log(yearUnitilRetirement2(1991, 'Sunil'));
console.log(yearUnitilRetirement2(1970, 'John'));

*/

/*

// l39: intro to arrays
// array: not a primitve value, diff values in array
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// impd data structure in js are objects and arrays
const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-1]);// inside of sq brackets statement are not used, expressions is used

friends[2] = 'Jay';// only primitive datatypes are immutable
console.log(friends);
// friends = [] error

// const nameq = 'sunil';
// nameq[1]='e'; //error 

const jonas = ["Jonas",'Kumar', 2037-1991, 'teacher', friends];
console.log(jonas);

// exercise
const calcAge = function(birthYear){
  return 2037 - birthYear;
};

const yearss = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(yearss[0]);
const age2 = calcAge(yearss[1]);
const age3 = calcAge(yearss[yearss.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge(yearss[0]),calcAge(yearss[1])];
console.log(ages)
*/

// l40 : basic array operations
const friends = ['Michael','Steven','Peter'];

// add elements
const newLen = friends.push('Jay');
console.log(friends, newLen);

const newLen2 = friends.unshift('John');// push in front
console.log(friends, newLen2);

// remove elements
const poppedEle = friends.pop();
console.log(friends, poppedEle);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Steven1'));

console.log(friends.includes('Steven')); 
console.log(friends.includes('bob'));

// uses === to check the ele
friends.push('23');
console.log(friends.includes(23));
console.log(friends.includes('23'));

if(friends.includes('Peter')) console.log('Hi Peter');
else console.log(`No Peter exists`);