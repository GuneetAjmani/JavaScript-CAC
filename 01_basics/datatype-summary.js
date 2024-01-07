// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigNumber = 345678933835545678965n

//----------------------------------------------------------------------

// Reference Type(Non-Primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"];
let myObject= {
    name : "Guneet",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof myFunction);
// console.log(typeof anotherId);

//*****************************************************************************

// Stack (Primitive), Heap (Non- Primitive)

let myName="GuneetSingh"

let anotherName = myName
anotherName="GuneetAjamni"

console.log(myName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}
let userTwo = userOne
userTwo.email = "guneet@google.com"

console.log(userOne.email);
console.log(userTwo.email);
