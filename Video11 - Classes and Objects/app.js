// const student = {
//     fullName: "Sarthak Gupta",
//     marks: 94.4,
//     printMarks: function()
//     {
//         console.log("marks =" , this.marks);
//     }
// };

//     const employee =
//     {
//         calcTaxes()
//         {
//             console.log("Tax rate is 10%")
//         },

//         // OR

//         calcTaxes : function()
//         {
//             console.log("Tax rate is 10%");
//         },
//     }

//     const Sarthak = 
//     {
//         salary: 10000,
//     };

//     Sarthak.__proto__ = employee;

// How to create classes
class Toyota
{
    start()
    {
        console.log("start");
    }

    
    stop()
    {
        console.log("stop");
    }

    setBrand(brand)
    {
        this.brandName = brand;
    }
}

let fortuner = new Toyota();
fortuner.setBrand("fortuner");


let lexus = new Toyota();
lexus.setBrand("lexus");


let camry = new Toyota();