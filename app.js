console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let rand = 87;
let userinput = window.prompt("Pick a number between 1 and 100.");
if(userInput < rand) {
    console.log("Too low!");
}
else if (userInput > rand) {
    console.log("Too high!");
}
else {
    console.log("You guessed it! 87!");
}
// Exercise 2
let userInput2 = window.prompt("What is your favorite animal?");
switch(animals.toLocaleLowerCase() ) {
    case "dog":
        console.log("Woof!");
        break;
    case "cat";
        console.log("Meow!");
        break;
    case "bird";
        console.log("Tweet!");
        break;
    case "cow";
        console.log("Moo!");
        break;
    case "fox";
        console.log("NINGNINGNINGNINGNINGNINGNING!");
        break;
    default:
            console.log(":)")
}