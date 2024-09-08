// QUESTION 1
/*
for (even=0; even<=100; even++)
{
    if(even%2 ===0)
    {
        console.log("even numbers from 0 to 100 are-> ", even);
    }
}
console.log("\n")
for (odd=0; odd<=100; odd++)
{
    if(odd%2 !==0)
    {
        console.log("odd numbers from 0 to 100 are-> ", odd);
    }
}
*/


// QUESTION 2

let guessNumber = prompt("Guess the Number");

let number = 25;
if(guessNumber >=0 && guessNumber<=10)
{
    console.log("You are close, but not too much");
}
else if (guessNumber >=11 && guessNumber<=24)
{
    console.log("You are very close");
}
else if (guessNumber == 25)
{
    console.log("You guessed it right");
}
else if (guessNumber >=26 && guessNumber <=29)
{
    console.log("You are superrr close");
}
else if (guessNumber >=30 && guessNumber<=40)
{
    console.log("You are close but try between 0 to 26");
}
else if (guessNumber >=41 && guessNumber<=100)
{
    console.log("You are not close");
}
else
{
    console.log("Enter a number from 0 to 100");
}


// Another way
let gameNum = 30;
let userNum = prompt("Guess the number: ");

while(userNum != gameNum)
{
   userNum = prompt("You entered wrong number, Guess again: ");
}
console.log("Congratulations you guessed the right number which is", gameNum);


let str = "string";
