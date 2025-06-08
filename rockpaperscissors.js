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
    return prompt("Rock, Paper, Scissors?");
}

function playRound() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    const humanAnsLowered = humanSelection.toLowerCase();
    const computerAnsLowered = computerSelection.toLowerCase();
    console.log(`Human: ${humanAnsLowered}, Computer: ${computerAnsLowered}`);

    if (humanAnsLowered === computerAnsLowered) {
        console.log("It's a TIE!!!");
    }
    else if ((humanAnsLowered === "rock" && computerAnsLowered === "scissors") || (humanAnsLowered === "paper" && computerAnsLowered === "rock") || (humanAnsLowered === "scissors" && computerAnsLowered === "paper")) {
        console.log(`You WON!!! ${humanAnsLowered} beats ${computerAnsLowered}`);
        humanScore += 1;
    }
    else {
        console.log(`You LOST!!! ${computerAnsLowered} beats ${humanAnsLowered}`);
        computerScore += 1;
    }

    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    return;
}

const roundToPlay = prompt("How many rounds would you like to play?");
let humanScore = 0;
let computerScore = 0;


for (let i = 0; i < roundToPlay; i++) {
    playRound();
}