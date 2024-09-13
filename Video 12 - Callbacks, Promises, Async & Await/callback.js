// Synchronous code.
function sum(a,b)
{
    console.log("sum of a and b is:", a + b);
}

function calculator(a, b, sumCallback)
{
    sumCallback(a,b);
}

calculator(2,5,sum);



// Callback hell.
// This means that nested callbacks arise.



// 

function getData(dataID) // Let's suppose it will take 2 seconds to get the data.
{
    console.log("Data with the ", dataID)
}

getData(123)




