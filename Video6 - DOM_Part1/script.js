// let headings = document.getElementsByClassName("heading-class");
// console.dir(headings);
// console.log(headings);

// let firstElement = document.querySelector("p"); //1st element
// console.dir(firstElement);

// let allElements = document.querySelectorAll("p"); //1st element
// console.dir(allElements);

// // For classes right with . and for id's use # but id;s can only be used in querySelector and not querySelectorAll
// let classHeading = document.querySelectorAll(".heading-class"); //1st element
// console.dir(classHeading);

let heading2 = document.querySelector("h2")
console.dir(heading2);

document.querySelector("h2").innerHTML = "Apna college students";

let className = document.querySelectorAll(".blue");
// className[0].innerHTML = "Hey, Gunnu";
// className[1].innerHTML = "Hey, Sarthak";
// className[2].innerHTML = "Hey, Murphy";


let idx = 1;
for (div of className)
{
    div.innerText = `new unique value ${idx}`;
    idx++;
}

