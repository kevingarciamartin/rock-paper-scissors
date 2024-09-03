function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
    return prompt("Choose your weapon:"
        + "\n1. Rock"
        + "\n2. Paper"
        + "\n3. Scissors").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == 1) {
            console.log("It's a draw!");
        }
        else if (computerChoice == 2) {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        }
        else if (computerChoice == 3) {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == 1) {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
        else if (computerChoice == 2) {
            console.log("It's a draw!");
        }
        else if (computerChoice == 3) {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == 1) {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        }
        else if (computerChoice == 2) {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }
        else if (computerChoice == 3) {
            console.log("It's a draw!");
        }
    }

    console.log(`Human: ${humanScore}`
            + `\nComputer: ${computerScore}`);
}

function playGame() {
    console.log("Rock, Paper, Scissors!"
        + "\nBest out of 5 rounds.");
    
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        console.log(`Round ${i + 1}`
            + `\n=======`);
        
        playRound(humanChoice, computerChoice);
    }

    console.log("======="
        + "\nThe game has ended.");
    if (humanScore > computerScore) {
        console.log(`You win with the score ${humanScore}-${computerScore}!`);
    } else if (humanScore < computerScore) {
        console.log(`You lose with the score ${humanScore}-${computerScore}.`);
    } else if (humanScore == computerScore) {
        console.log(`The game is a draw with the score ${humanScore}-${computerScore}.`);
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();