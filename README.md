# Slot Machine Game

## Description
This is a simple command-line slot machine game implemented in JavaScript. The game allows you to deposit money, place bets on lines, and spin the slot machine to win money based on the symbols that appear.

## Features
- **Deposit Money**: The game prompts you to deposit an amount of money to start playing.
- **Place Bets**: You can place bets on 1 to 3 lines. The game prompts you to enter the number of lines and the amount of bet per line.
- **Spin the Slot Machine**: The slot machine spins and displays the symbols on each line.
- **Win Money**: If all symbols on a line are the same, you win money. The amount of money you win depends on the symbol and the amount of your bet.

## How It Works
The game is implemented in a single JavaScript file. Here's a brief overview of how it works:

1. **Deposit Money**: The `deposit` function prompts you to enter an amount of money to deposit. It checks if the entered amount is a valid number and greater than 0.
2. **Place Bets**: The `getNumberOfLines` and `getBet` functions prompt you to enter the number of lines and the amount of bet per line, respectively. They check if the entered values are valid.
3. **Spin the Slot Machine**: The `spin` function generates the symbols on the slot machine. It creates an array of symbols based on their counts and selects random symbols for each reel.
4. **Transpose the Reels**: The `transpose` function turns the reels into rows. This makes it easier to check if all symbols on a line are the same.
5. **Print the Results**: The `printRows` function prints the symbols on each line.
6. **Calculate Winnings**: The `getWinnings` function calculates the amount of money you win. It checks each line and if all symbols on a line are the same, it adds the value of the symbol times the bet to your winnings.
7. **Main Game Loop**: The `game` function is the main game loop. It initializes the balance, and loops through the game until you lose all your money or choose to stop playing.

## Usage
To play the game, you need to have Node.js installed on your computer. You can run the game by executing the JavaScript file in Node.js.

## Conclusion
This is a fun and simple slot machine game that demonstrates how you can create interactive command-line games in JavaScript. Enjoy playing and feel free to modify and expand on this project!