function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice() {
    let randomInt = getRandomIntInclusive(1, 3);
    
    if (randomInt === 1) {
        return "Rock"
    }
    else if (randomInt === 2) {
        return "Paper"
    }
    else if (randomInt === 3) {
        return "Scissors"
    }
}

function getHumanChoice() {
    // return prompt("Rock, Paper, Scissors?");
    return "Rock";
}

function playRound(selection) {
    let humanSelection = selection;
    let computerSelection = getComputerChoice();
    let gameMessage = " ";

    const humanAnsLowered = humanSelection.toLowerCase();
    const computerAnsLowered = computerSelection.toLowerCase();
    console.log(`Human: ${humanAnsLowered}, Computer: ${computerAnsLowered}`);

    if (humanAnsLowered === computerAnsLowered) {
        gameMessage = "It's a TIE!!!";
    }
    else if ((humanAnsLowered === "rock" && computerAnsLowered === "scissors") || (humanAnsLowered === "paper" && computerAnsLowered === "rock") || (humanAnsLowered === "scissors" && computerAnsLowered === "paper")) {
        gameMessage = `You WON!!! ${humanAnsLowered} beats ${computerAnsLowered}`;
        playerScore += 1;
    }
    else {
        gameMessage = `You LOST!!! ${computerAnsLowered} beats ${humanAnsLowered}`;
        computerScore += 1;
    }

    gameMessageID.textContent = gameMessage;
    updateScoreText();
    return;
}

function updateScoreText() {
    playerScoreID.textContent = playerScore;
    computerScoreID.textContent = computerScore;
}

const roundToPlay = 1;
let playerScore = 0;
let computerScore = 0;
let playerScoreID = document.getElementById("player-score");
let computerScoreID = document.getElementById("computer-score");
let gameMessageID = document.getElementById("message");
const playBtns = document.querySelectorAll(".play");

playBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        playRound(e.target.id);
    });
});