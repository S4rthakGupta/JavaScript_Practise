// Parameterized Function
function Welcome(name) 
{
  console.log("Welcome to our hotel Mr." + name);
  console.log("Welcome to our motel Mr." + name);
  console.log("Welcome to our room Mr." + name);
  console.log("Welcome to our home Mr." + name);
}
Welcome("Sarthak Gupta");

// Sum of two numbers
// function sum (twoValues)
// {
//     console.log("Sum of the entered numbers is: " + twoValues)
//     console.log("Remainder of the entered numbers is: " + twoValues)
// }
// sum(5 + 8);
// sum(2 % 2);

function Sum(x, y) 
{
  console.log("Sum of x + y is: "+  (x + y));
  console.log("Multiple of x * y is: " + (x * y));
  console.log("Dividend of x / y is: " + (x / y));
}
Sum(5 , 2);



const arrowFunction = (Name) =>
{
    console.log("Welcome to our home:" + Name);
}
arrowFunction("Sarthak and Gurbani")


const sumArrowFunction = (a, b) =>
{
    console.log("Value of a is " + a);
    console.log("Value of b is " + b);  
    return a + b;
}

let result1 = sumArrowFunction(3, 2);
console.log("Sum of a and b is: " + result1);

let result2 = sumArrowFunction(31, 2);
console.log("Sum of a and b is: " + result2);


