// let array = ["Sarthak", 'Gurbani', "Abhishek"];

// array.forEach((val) =>
// {
//     console.log(val.toUpperCase());
// })


let arr = [1,2,3,4,5,6,7,8,9,10];

// Using direct for each loop
arr.forEach((val) =>
{
    console.log(`The square of ${val} is:`,val*val)
})
console.log("\n");


// Another way of doing it using a function
let calcSquare = (val) =>
{
    console.log(`The square of ${val} is:`,val*val)
};
arr.forEach(calcSquare);
console.log("\n");


// Map in arrays to print all the values
arr.map((val) =>
{
    console.log(val);
})



console.log("\n");
// Prints the whole array and a new one!
let newArr = arr.map((val) =>
{
    return val;
})
console.log(newArr);

// Filters the array with even numbers!
let ARR = [1,2,3,4,5,6,7,8,9,10];
let evenArr = ARR.filter((val)=>
{
    return val % 2 ===0
    // return val % 2 !==0
    // return val < 3
})
console.log(evenArr);


// Reduce method
const output = ARR.reduce((res, curr)=>
{
    return res + curr;
})
console.log(output);


// Returns the largest number in an array
let num = [5, 820, 80, 950, 416];
const output1 = num.reduce((prev , curr) =>
{
    return prev > curr ? prev : curr //For largest
    return prev < curr ? prev : curr //For smallest
})
console.log(output1);





// Filter out marks of students whose marks are 90+
let marks = [97, 67, 54, 32, 96, 86 , 90];

const score = marks.filter((val) =>
{
    return val > 90
})
console.log(score);

// Question 2 - Video 5
let n = prompt("Enter a number");
let guess = [];

for(let i = 1; i<=n; i++)
{
    guess[i-1] = i;
}
console.log(guess);

let sum50 = guess.reduce((res, curr) =>
{
    return res + curr;
})
console.log(sum50);

let factorial = guess.reduce((res, curr) =>
{
    return res * curr;
})
console.log(factorial);