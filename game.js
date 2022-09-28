function getComputerChoice() {

    const randomIndex = Math.floor(Math.random() * 3);
    const array = ["rock", "paper", "scissors"];
    const item = array[randomIndex];
    return item;
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock") {
        const result = "You Win";
        return result;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "rock" && computerSelection == "paper") {
        const result = "You lose";
        return result;
    }
    else {
        const result = "Draw";
        return result;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What do you choose rock-paper-scissors");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection.toLowerCase, computerSelection));
    }
}

game();
