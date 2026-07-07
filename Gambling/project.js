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



//-------------------------step-01--------------------------
const prompt = require("prompt-sync")();

// This is an ES6 Arrow Function. It's like a machine waiting to be turned on.
const deposit = () => {
  while (true) {

    const depositAmount = prompt("Enter a deposit amount:");
    const numberDepositAmount = parseFloat(depositAmount); //This line converts the text into a number (a "Float"). Hello->NaN, 50->50, 50.5->50.5

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again.");
    }else{
        return numberDepositAmount;
    }
  }
};


//-------------------------step-02--------------------------
const getNumberOfLines=()=>{
    while (true) {

    const numberOFLines = prompt("Enter the number of lines to bet on(1-3):");
    const numberLines = parseFloat(numberOFLines); 

    if (isNaN(numberLines) || numberLines <= 0 || numberLines > 3) {
      console.log("Invalid number of lines, try again.");
    }else{
        return numberLines;
    }
  }

}

const getbet=(balance)=>{
  while(true){
    const bet=prompt("Enter the total bet: ");
    const numberBet=parseFloat(bet);

    if(isNaN(numberBet) || numberBet<=0 || numberBet>balance){
      console.log("Invalid bet amount, try again.");
    }else{
      return numberBet;
    }
  }
}

let balance=deposit();
const numberOfLines=getNumberOfLines();

