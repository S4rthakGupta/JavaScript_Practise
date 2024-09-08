// let num = prompt("Enter a number");

// if (num % 5 ===  0)
// {
//     console.log(num ," is multiple of 5");
// }
// else
// {
//     console.log(num, "is not a multiple of 5");
// }



let marks = prompt("Enter your marks: ");
let grade;

if (marks>=90 && marks<=100)
{
    grade = ("A")
}
else if (marks>=70 && marks<=89)
{
    grade = ("B")
}
else if (marks>=60 && marks<=69)
{
    grade = ("C")
}
else if (marks>=50 && marks<=59)
{
    grade = ("D")
}
else if (marks>=0 && marks<=49)
{
    grade = ("F")
}
else
{
    console.log("Invalid entry of marks");
}

console.log(alert("The grade you scored is: "+ grade))

