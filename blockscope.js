
// #### 1. Updater
// * Depending on the value of a variable (determiner), assign a value to `x`. 
//     - If determiner is less than 0, `x`'s value should be "Less than 0"
//     - If determiner is greater or equal 0, `x`'s value should "Greater or equal to 0".

const det = 5;
if (det < 0){
    let x = "Less than 0";
    console.log(x);
}
if (det >= 0){
    let x = "Greater or equal to 0";
    console.log(x);
}
// ANSWER: "Greater or equal to 0"


// #### 2. New Variables 
// * Depending on the value of the determiner, assign a value to another variable (`updater`) and create another variable.
//     - If determiner is greater of equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called `message`, assign a value of "Positive Integer" and print message. 
//     - If determiner is less than 0, `updater`'s value should be "Less than 0".

const det2 = 6;
if (det2 >= 0){
    let updater = "Greater or equal to 0";
    const message = "Positive Integer";
    console.log(message);
}
if (det2 < 0){
    let updater = "Less than 0";
}
// ANSWER: it prints POsitive Integer


// * **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.

// ANSWER: if we try to print the message outside the if statement it will bring an error as message not defined. It should be inside the if statement.


// #### 3. Ternary v.s. If statement 
// * When do you use a ternary v.s. an if statement? Give an example.

// ANSWER:
// WE should use ternary operators to set a value to a variable, or to reduce code if necessary and we should use  if-else statements for everything else. An if / else statement emphasises the branching first and what's to be done is secondary, while a ternary operator emphasises what's to be done over the selection of the values to do it with.
// example:
let age = 26;
const drink = (age >= 18) ? "Wine" : "Fruit-Juice";
console.log(drink); // "Wine"

// example with if else:
let age = 15;
if (age > 18){
    console.log("Wine");
} else {
    console.log("Fruit-Juice");
}