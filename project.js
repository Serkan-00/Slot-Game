// 1. Deposit some money (DONE)
// 2. Determine number of lines to bet on (DONE)
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")(); 
//Step1
const deposit = () => { 
    while (true) {  //This While statement makes it so the request is repeated constantly 
     const depositAmount = prompt("Enter a deposit amount: "); //simply telling user to enter amount 
     const numberDepositAmount = parseFloat(depositAmount);  //making sure output is what user puts 

     if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {  //NaN = Not a number. This line doesnt allow strings or less than or equal to 0 
        console.log("Invalid deposit amount try again.")
     } else { 
        return numberDepositAmount; 
     }
    }; 
};


//Step2
const getNumberOfLines = () => { 
    while (true) {  
        const lines = prompt("Enter number of lines to bet on: "); 
        const numberOfLines= parseFloat(lines);  
   
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) { 
           console.log("Invalid number of lines, try again.")
        } else { 
           return numberOfLines; 
        }
       }; 
}

const getBet = (balance, lines) => {   //The (balance) inside the parentheses indicates that the getBet function expects a single argument called balance. This argument represents the available balance the player has for betting.
    while (true) {  
        const bet = prompt("Enter the bet per line: "); 
        const numberBet = parseFloat(bet);  
   
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) { 
           console.log("Invalid bet, try again.")
        } else { 
           return numberBet; 
        }
    }; 
}




let balance = deposit(); //let allows you to change your input later on 
const numberOfLines = getNumberOfLines(); 
const bet = getBet(balance, numberOfLines); 






