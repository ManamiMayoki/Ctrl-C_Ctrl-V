// 1. Despot some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again


//1. function deposit(){
//     return 1;
// }

//2. const deposit=()=>{
//     return 1;
// }

//function 1 and 2 are same, but 2 is a arrow function



// 'require()' is a built-in Node.js function used to load external packages/libraries.
// "prompt-sync" is a specific package that allows us to get input from the terminal.
// The extra '()' at the end immediately initializes/activates the tool so it's ready to use.
// We store this tool inside a constant variable named 'prompt'.
const prompt=require("prompt-sync")();


// This is an ES6 Arrow Function. It's like a machine waiting to be turned on.
const deposit=()=>{
    // 1. This line does three things:
    //    a. It pauses the program execution.
    //    b. It prints "Enter a deposit amount: " in the terminal.
    //    c. It waits for the user to type a number and hit 'Enter'.
    // 2. Whatever the user types is caught and stored inside 'depositAmount'.
    // CRITICAL NOTE: Anything the user types comes in as text (a "String"), 
    // even if they type numbers like "50".
    const depositAmount=prompt("Enter a deposit amount:");
    const numberDepositAmount=parseFloat(depositAmount);//This line converts the text into a number (a "Float").
}

deposit();