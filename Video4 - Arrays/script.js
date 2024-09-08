let marks = [97,82,89,25,62];

console.log(marks);
console.log(marks.length);

let names = ["gurbani", "Sarthak", "Saidha"];
console.log(names);

console.log(marks[4]);


console.log(marks[4] = 89);
console.log(marks);

// using for loop
// for (let i = 0; i < names.length; i++)
// {
//     console.log((names[i]));
// }

// using for of
for (const element of names) 
{
    console.log(element.toUpperCase());    
    console.log(element);    
}

