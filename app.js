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
    const message = document.createElement("p");

    switch (humanChoice) {
        case "rock":
            if (computerChoice == 1) {
                message.textContent = "It's a draw!";
            }
            else if (computerChoice == 2) {
                message.textContent = "You lose! Paper beats Rock.";
                computerScore++;
            }
            else if (computerChoice == 3) {
                message.textContent = "You win! Rock beats Scissors.";
                humanScore++;                
            }
            break;
        case "paper":
            if (computerChoice == 1) {
                message.textContent = "You win! Paper beats Rock.";
                humanScore++;
            }
            else if (computerChoice == 2) {
                message.textContent = "It's a draw!";
            }
            else if (computerChoice == 3) {
                message.textContent = "You lose! Scissors beats Paper.";
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice == 1) {
                message.textContent = "You lose! Rock beats Scissors.";
                computerScore++;
            }
            else if (computerChoice == 2) {
                message.textContent = "You win! Scissors beats Paper";
                humanScore++;
            }
            else if (computerChoice == 3) {
                message.textContent = "It's a draw!";
            }
            break;
    }
    
    score.textContent = getScore();
    scoreContainer.appendChild(message);
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

function getScore() {
    return `Score: You ${humanScore}-${computerScore} Computer`;
}

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});

const scoreContainer = document.querySelector(".score-container");
const score = document.createElement("p");
score.textContent = getScore();
scoreContainer.appendChild(score);
