/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// empty obeject can be created two ways
const user= new Object();// Object constructer syntax
const user1= {}; // object literal syntax


const car={
    color: "white",
    modelNo:2024,
    prize:"800$",
    Brand:"Tata",
    name:"Punch",
    Varient:{
       base:"Pbase",
       medium:"Pmedium",
    },
}

console.log("Car color is: ", car.color);
console.log("Base varient:", car.Varient.base);
let cColor=prompt("What you want know about the Car?", "color");
console.log("Car color is:", car[cColor]);


//Computed properties
//We can use square brackets in an object literal, when creating an object. That’s called computed properties.
let fruit= prompt("Which fruit you want to buy?", "apple");

const bag={
    [fruit]:"apple",
};

console.log("The fruit you bought is :", bag.apple);
