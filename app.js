function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    const message = document.createElement("p");

    switch (humanChoice) {
        case "rock":
            if (computerChoice == "rock") {
                message.textContent = "It's a draw!";
            }
            else if (computerChoice == "paper") {
                message.textContent = "You lose! Paper beats Rock.";
                computerScore++;
            }
            else if (computerChoice == "scissors") {
                message.textContent = "You win! Rock beats Scissors.";
                humanScore++;                
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                message.textContent = "You win! Paper beats Rock.";
                humanScore++;
            }
            else if (computerChoice == "paper") {
                message.textContent = "It's a draw!";
            }
            else if (computerChoice == "scissors") {
                message.textContent = "You lose! Scissors beats Paper.";
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice == "rock") {
                message.textContent = "You lose! Rock beats Scissors.";
                computerScore++;
            }
            else if (computerChoice == "paper") {
                message.textContent = "You win! Scissors beats Paper";
                humanScore++;
            }
            else if (computerChoice == "scissors") {
                message.textContent = "It's a draw!";
            }
            break;
    }
    
    score.textContent = getScore();
    log.appendChild(message);

    if (isGameOver()) {
        declareWinnerOfTheGame();
    }
}

function getScore() {
    return `Score: You ${humanScore}-${computerScore} Computer`;
}

function isGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        return true;
    }
    return false;
}

function declareWinnerOfTheGame() {
    let winner = humanScore > computerScore ? "You" : "the Computer";
    log.innerHTML = `<h1>The winner is ${winner}!</h1>`;
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
const log = document.querySelector(".log");

const score = document.createElement("p");
score.classList.add("score");
score.textContent = getScore();

scoreContainer.appendChild(score);
