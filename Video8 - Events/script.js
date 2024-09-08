let btn1 = document.querySelector("#btn1");

//  DOING EVENTS DIRECTLY ON NODE
// btn1.onclick = (evt) =>
// {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
//     console.log("button 1 was clicked");
// }

// EVENT OBJECTS USING ADD EVENT LISTENER
btn1.addEventListener("click", (evt) => 
{
    console.log("Button 1 was clicked - HANLDER 1");
    // console.log(evt);
    // console.log(evt.type);
    // console.log(evt.target);
    // console.log(evt.clientX);
    // console.log(evt.clientY);
});

// btn1.addEventListener("click", (evt) => 
// {
//     console.log("Button 1 was clicked - Handler 2");
// });

// Adding the event in a variable and then removing it by passing its value in the remove listener area.
// const handler3 = () => 
// {
//     console.log("Button 1 was clicked - Handler 3");
// };
// btn1.addEventListener("click" , handler3);

// btn1.addEventListener("click", (evt) => 
// {
//     console.log("Button 1 was clicked - Handler 4");
// });

// Removing event listener
// btn1.removeEventListener("click", handler3)

let box1 = document.querySelector(".box");
box1.onmouseover = (evt) =>
{
    // console.log(evt);
    // console.log(evt.type);
    // console.log(evt.target);
    // console.log(evt.clientX);
    // console.log(evt.clientY);
    console.log("Mouse was hovered");
}