// let str = "Sarthak";
// let str2 = 'Gupta';

// console.log(str, str2)

let obj = 
{
    item: "pen",
    price: 10,
};
// This is using template literal.
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// The statement being printed using console
console.log("The cost of", obj.item, " is", obj.price, "rupees")

// This is a TEMPLATE LITERAL
let specialString = `This is a template literal`;
console.log(typeof specialString);

// You can also add or do things here.
let specialString2 = `This is a template literal ${1 + 2 + 3}`;
console.log(specialString2);

// Escape characters
console.log("Sarthak\nGupta"); // New line
console.log("Sarthak \tGupta"); //Tab\

// String methods in JS
let name = "GurbANi";
let name2 = "     GurbANi saiDha       ";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// Removes front and end empty spaces from the string
console.log(name2.trim());

// Ending value is not compulsory to add. (INDEX Value)
console.log(name.slice(4));
console.log(name.slice(4,6));

// Connects two strings
console.log(name.concat(name2));

// also use replace all to replace all the characters with values. FOR EXAMPLE - AAA, aaa
console.log(name.replace("AN", "an"));
console.log(name);

// gives the character on 2nd index
console.log(name.charAt(2));

