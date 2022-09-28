function getComputerChoice() {
    
    const randomIndex = Math.floor(Math.random() * 3);
    const array = ["Rock","Paper","Scissor"];
    const item = array[randomIndex];
    return item;
}

console.log(getComputerChoice());