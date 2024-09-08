// This is asynchronous programming as the setTimeout function is called after 1 second and the console.log("4") is called before that. So, the output will be 1, 2, 3, 4, Hello.

console.log("1");
console.log("2");
console.log("3");

setTimeout(() => {
    console.log("Hello");
}, 1000);

console.log("4");