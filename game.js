function getComputerChoice() {

    const randomIndex = Math.floor(Math.random() * 3);
    const array = ["rock", "paper", "scissor"];
    const item = array[randomIndex];
    return item;
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection=="rock" && computerSelection =="scissor" ||
    playerSelection=="scissor" && computerSelection =="paper" ||
    playerSelection=="paper" && computerSelection =="rock") {
        const result="You Win";
        return result;
    }
    else if (playerSelection=="scissor" && computerSelection =="rock" ||
    playerSelection=="paper" && computerSelection =="scissor" ||
    playerSelection=="rock" && computerSelection =="paper") {
        const result="You lose";
        return result;
    }
    else{
        const result="Draw";
        return result;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));