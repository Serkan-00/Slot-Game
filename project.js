// 1. Deposit some money (DONE)
// 2. Determine number of lines to bet on (DONE)
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")(); 

const deposit = () => { 
    while (true) {  //This While statement makes it so the request is repeated constantly 
     const depositAmount = prompt("Enter a deposit amount: "); //simply telling user to enter amount 
     const numberDepositAmount = parseFloat(depositAmount);  //making sure output is what user puts and no strings allowed

     if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {  //NaN = Not a number 
        console.log("Invalid deposit amount try again.")
     } else { 
        return numberDepositAmount; 
     }
    }; 
};

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


const depositAmount = deposit(); 
const numberOfLines = getNumberOfLines(); 






