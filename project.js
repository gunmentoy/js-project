// determine number of betting lines
// collecting a bet amount
// spin the slot machine
// check if user won or lost
// award the user if won, take bet if lost
// play again or quit

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOLS_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

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
const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt(`How much would you like to bet per line?: `);
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log("Please enter a valid bet amount");
    } else {
      return numberBet;
    }
  }
};

// spinning the slot machine
const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [[], [], []];
  for (let i = 0; i < COLS; i++) {
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
