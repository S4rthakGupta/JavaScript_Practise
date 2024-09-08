
// let id = div.getAttribute("id")
// console.log(id);

// let name = div.getAttribute("name")
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class", "newClass"));

// div.style.backgroundColor = "red";
// div.style.fontSize = "25px";
// div.style.visibility = "hidden";

// div.innerText = "Hello, gunnu!"

let newBtn = document.createElement("button");
newBtn.innerText = "CLICK ME!";  

let div = document.querySelector("div");
// Try all of these
div.append(newBtn);
div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn);
console.log(div);


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hey, I am h1</i>"; 


div.before(newHeading);
let para = document.querySelector("p");
para.remove();