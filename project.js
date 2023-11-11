/**
 * This script simulates a slot machine game. It prompts the user to deposit an amount of money, 
 * then asks how many lines they would like to bet on and how much they would like to bet per line. 
 * The slot machine then spins and displays the results. If the user wins, their winnings are added 
 * to their balance, and they are prompted to play again. If the user loses all their money, the game ends.
 * 
 * @file This file contains the code for the slot machine game.
 * @summary This script simulates a slot machine game.
 * @description This script contains functions for depositing money, determining the number of lines to bet on, 
 * collecting a bet amount, spinning the slot machine, transposing the reels into a row, printing the results, 
 * determining if the user won or lost, and the main function that runs the game.
 * @requires prompt-sync
 * @version 1.0.0
 * @since 2021-09-01
 */
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

// turning the reels into a row
const transpose = (reels) => {
  const rows = [];
  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};

// printing the results
const printRows = (rows) => {
  for (const row of rows) {
    //console.log(row.join(" | "));
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

// determain if the user won or lost
const getWinnings = (rows, bet, lines) => {
  let winnings = 0;
  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }

    if (allSame) {
      winnings += SYMBOLS_VALUES[symbols[0]] * bet;
    }
  }

  return winnings;
};

// main function
/**
 * The game function is the main function that runs the game. It initializes the balance, 
 * and loops through the game until the player loses all their money or chooses to stop playing.
 * @returns {void}
 */
const game = () => {
  let balance = deposit();

  while (true) {
    console.log("Balance: $" + balance);
    const numberOfLines = getNumberOfLines();
    const bet = getBet(balance, numberOfLines);
    balance -= bet * numberOfLines;
    const reels = spin();
    const rows = transpose(reels);
    printRows(rows);
    const winnings = getWinnings(rows, bet, numberOfLines);
    balance += winnings;
    console.log("You won, $" + winnings);

    if (balance <= 0) {
      console.log("You lost all your money");
      break;
    }

    const playAgain = prompt("Would you like to play again? (y/n): ");

    if (playAgain != "y") break;
  }
};

game();
