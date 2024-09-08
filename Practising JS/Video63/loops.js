let arr = [1,98,52 , 859 ,1058, 856];

// for (let i = 0; i < arr.length; i++) 
// {
//     const element = arr[i];
//     console.log(element);
// }

// It gives the value + the index of the array with the full [array]
// arr.forEach((value, i , arr) =>
// {
//     console.log(value, i , arr);
// })

// for (const iterator of arr) {
//     console.log(iterator)
// }

// Returns all the values which are greater than 7 
// We use the filter keyword for it!
const newArr = (e) =>
{
    if(e>7)
    {
        return true
    }
    return false
}
console.log(arr.filter(newArr));