// let boxes = document.getElementsByClassName("box");

// console.log(boxes)

// boxes[2].style.backgroundColor = "red";

// document.getElementById("red").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "green";

// document.querySelectorAll(".box").style.backgroundColor = "green";

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(e =>
    {
        e.style.backgroundColor = "green";
    })

const a = document.getElementsByTagName("div");
console.log(a);