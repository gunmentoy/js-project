// determine number of betting lines
// collecting a bet amount
// spin the slot machine
// check if user won or lost
// award the user if won, take bet if lost
// play again or quit

const prompt = require("prompt-sync")();

// prompt user for an amount of money to deposit
const deposit = () => {
  while (true) {
    const depositAmount = prompt("How much would you like to deposit?: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Please enter a valid amount");
    } else {
      return numberDepositAmount;
    }
  }
};

// detemining how many lines to bet on
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("How many lines would you like to bet on? (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Please enter a valid number of lines between 1 and 3");
    } else {
      return numberOfLines;
    }
  }
};

// collecting a bet amount
const getBet = (balance) => {
    while (true) {
        const bet = prompt(`How much would you like to bet? (1-${balance}): `);
        const betAmount = parseFloat(bet);
    
        if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance) {
        console.log("Please enter a valid bet amount");
        } else {
        return betAmount;
        }
    }
};  

let balance = deposit();
const numberOfLines = getNumberOfLines();
