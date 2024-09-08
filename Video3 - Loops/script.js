// Initialization
// Stopping statement
// Updation

// For LOOP
// BLOCK SCOPE
for(let i = 1; i<=2; i++)
{
    console.log(i, " love you GURBANI");
}

// While loop
let j = 1;
while (j <=10)
{
    console.log("j = ", j);
    j++;
}

// Do-While loop
let k = 1;
do
{
    console.log("k = ", k);
    k++;
} while (k <=10) ;


// For-Of loop
let str = "Sarthak";
let size = 0;
for(let val of str)
{
    console.log("My name is  = ", val);
    size++;
}
console.log("Size of string is -> " , size);

// For-in loop
let student = 
{
    name: "Sarthak Gupta",
    age:20,
    cgpa: 9.8,
    isPAss: true
};

// This will return keys (name, age, cgpa, isPass)
for (let key in student)
{
    console.log("Key = ", key ,",", "value = ", student[key]);
}


 


