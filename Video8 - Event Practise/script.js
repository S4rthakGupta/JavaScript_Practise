let modeBtn = document.querySelector("#mode");
let currMode = "light";
let mode = document.querySelector("body");

modeBtn.addEventListener("click", () => 
{
  if (currMode === "light") 
  {
    currMode = "dark";
    // document.querySelector("body").style.backgroundColor = "black";
    mode.classList.add("dark");
    mode.classList.remove("light");

    // Works both ways!
  } 
  else 
  {
    currMode = "light";
    // document.querySelector("body").style.backgroundColor = "white";
    mode.classList.remove("dark");
    mode.classList.add("light");
  }
  console.log(currMode);
});

let modeHover = document.querySelector("#box");
let currHover = "light";


modeHover.addEventListener("mouseover", () => 
{
  if (currHover === "light") 
  {
    currHover = "dark";
    document.querySelector("#box").style.backgroundColor = "black";


    // Works both ways!
  } 
  else 
  {
    currHover = "light";
    document.querySelector("#box").style.backgroundColor = "white";
  }
  console.log(currHover);
});
