// Can only start with a, _ or $.
// Not with a number;
// Variable names are case sensitive.
// VAR IS GLOBALLY SCOPED

// Globally means it can be accessed anywhere in the whole code
var a = 5;
var b = 6;
var c = "Sarthak";
// This is allowed as you can change the value of a var!!
var a = a + 1;

console.log(a+b);

// Gives the type of it!!
console.log(typeof a, typeof b, typeof c);

// LET and CONST ARE BLOCK SCOPED
// Cannot change value of const.

// Below written is not allowed!!
// const a1 = 6;
// a1 = a1 + 1;


// ALWAYS USE LET RATHER THAN VAR!!!!!!
let x = 10;
let y = 20;
let z = "Gupta";

// Because let is block scoped and can only be used within a block. Best comes in use when using looping, if else, etc!!
{
    let x = 11;
    console.log(x);
}

// Now it shows the value of 11 rather than the x which is stored outside!
console.log(x);

// ALL PRIMITIVE DATATYPES OF JAVASCRIPT!!
let a1 = 5;
let a2 = 6.55;
let a3 ="Sarthak";
let a4 = undefined;
const t = true;
let n = null;

console.log(a1, a2, a3, a4, t, n)
console.log(typeof a1, typeof a2, typeof a3, typeof a4,typeof t, typeof n)
// WHY IS TYPEOF NULL AN OBJECT?????? - Questions for an interview??



// Objects in JavaScript
let o = 
{
    // Key  //Value 

    // key and value both comes in "" and does not end with a terminator but nothing in it.
    // Only can be used inside curly brackets!!
    "name1": "Sarthak",
    "age": 22
}
console.log(o);

// This way we can add more values in the object!
// using the name.

o.salary = "10000crores"
console.log(o);
o.salary = "500crores"
console.log(o);






