let arr = [55, 85, 98, 85, 65];
// Index    0   1   2   3   4  

// Returns the value of the array on the 4th index..
console.log(arr[4]);

// Returns the length of an array!
console.log(arr.length);

// Returns array's type which is an object in Jscript
console.log(typeof arr);

// Joins the array and adds "and" in between everywhere!!
console.log(arr.join(" and "));

// Delets the last element from the array!
console.log(arr.pop());
console.log(arr.length);

// Delets the first element from the array!
console.log(arr.shift());
console.log(arr.length);

// Add's value in the beginning of the array!
console.log(arr.unshift("Gurbani"));
console.log(arr.length);

// Delete's the value inside but the memory is still alllocated!
let v = delete arr[2];
console.log(v);
console.log(arr.length);
console.log(arr);



let a = arr.push(100); 
let b = arr.push("Sarthak!!");

console.log(a);
console.log(b);
console.log(arr);


// This method will not change the existing array but will just concatenate all the arrays that you will list in the bracket!
let arr1 = [10,60,30,40,50];
let arr2 = [60,70,80,90,100];
let arr3 = [110,120,130,140,150];
let arr4 = [160,170,180,190,200];

let Concat = arr1.concat(arr2, arr3, arr4);
console.log(Concat);


console.log(arr.splice(1,3));
console.log(arr.length);
console.log("_____________________________");

// Sorts the array order wise!! (From small to big)
console.log(arr1.sort());

// Reverse's the array order wise!! (From small to big)
console.log(arr1.reverse());