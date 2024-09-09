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
    
    // Remove oldest log message if the capacity is full
    if (numberOfLogMessages === maximumLogMessages) {
        let messages = log.getElementsByTagName("p");
        log.removeChild(messages[0]);
    }
    
    log.appendChild(message);
    
    numberOfLogMessages = (numberOfLogMessages === maximumLogMessages) ? 5 : numberOfLogMessages + 1;

    updateScore();

    if (isGameOver()) {
        declareWinnerOfTheGame();
        disableGameButtons();
        addPlayAgain();
        playAgain();
    }
}

function getHumanScore() {
    return humanScore;
}

function getComputerScore() {
    return computerScore;
}

function updateScore() {
    document.querySelector(".human-score").textContent = `${humanScore}`;
    document.querySelector(".computer-score").textContent = `${computerScore}`;
}

function isGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        return true;
    }
    return false;
}

function declareWinnerOfTheGame() {
    let winner = humanScore > computerScore ? "You" : "the Computer";
    log.innerHTML = `<h2>The winner is ${winner}!</h2>`;
}

function disableGameButtons() {
    gameButtons.forEach((button) => {
        button.disabled = true;
    });
}

function enableGameButtons() {
    gameButtons.forEach((button) => {
        button.disabled = false;
    });
}

function addPlayAgain() {
    const playAgain = document.createElement("button");
    playAgain.classList.add("play-again");
    playAgain.textContent = "Play Again";
    log.appendChild(playAgain);
}

function resetLog() {
    log.innerHTML = "";
    numberOfLogMessages = 0;
}

function playAgain() {
    const playAgain = document.querySelector(".play-again");
    playAgain.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;

        updateScore();
        enableGameButtons();
        resetLog();
    });
}

let humanScore = 0;
let computerScore = 0;

const maximumLogMessages = 5;
let numberOfLogMessages = 0;

const gameButtons = document.querySelectorAll("button");

gameButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});

const scoreContainer = document.querySelector(".score-container"); 
const log = document.querySelector(".log");
