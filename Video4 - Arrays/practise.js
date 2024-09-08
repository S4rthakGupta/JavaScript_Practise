// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for(let value of marks )
// {
//     console.log(value);
//     sum += value;
// }
// let avg = sum / marks.length;
// console.log(`average marks of the students in the class = ${avg}`);



// QUES 2

// let items = [250, 645, 300, 900, 50]
// let i = 0;
// for (let value of items)
// {
//     let offer = value/10;
//     items [i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

// for (let j=0; j <items.length; j++)
// {
//     let offer = items[j] / 10;
//     items[j] -= offer;
    
// }
// console.log(items);

let foodItems  = ["Potato", "Cauliflower", "okra" ,"Bhindi" , "Tamatar"]
let drinkItems  = ["Coke", "Sprite", "Morinda" ,"Pepsi" , "Ginger Ale"]

// Join multiple arrays
let joined = foodItems.concat(drinkItems);
console.group(joined);


console.log(foodItems);



// Adds new items
foodItems.push("Chips" , "Coke" , "Burger");
console.log(foodItems);

// Deletes an item in array from end
let deletedIem = foodItems.pop();
console.log(foodItems);
console.log("The item you deleted was ->" , deletedIem)


// Converts array into string
console.log(foodItems.toString());

// Just like push method
console.log(foodItems.unshift("Cake"));
console.log(foodItems);

// just like pop method
console.log(foodItems.shift("Cake"));
console.log(foodItems);


// Slices particular elements form an array
console.log(foodItems.slice(1,3));

// Splice changes the original array
// Takes 3 inputs (paramaters) - (starting index, how many items should be deleted, replaced values)
console.log(foodItems.splice("Cake", 2 , "Cakes"));
console.log(foodItems);




