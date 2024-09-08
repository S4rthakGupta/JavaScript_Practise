let newBtn1 = document.createElement("button");
newBtn1.innerText = "CLICK ME!"; 

newBtn1.style.color = "white";
newBtn1.style.backgroundColor = "red";

let headingg = document.querySelector("h1");

headingg.before(newBtn1);

let span1 = document.querySelector("span");
console.log(span1.setAttribute("class", "newClass"));
