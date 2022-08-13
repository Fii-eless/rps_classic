
//create function that makes a random choice between rock, paper and scissors

getComputerChoice = () => {
    const rps = ['rock' , 'paper' , 'scissors'];
    const computerChoice = rps[Math.floor(Math.random() * 3)];
    return computerChoice;
}

const getPlayerChoice = prompt("Please enter 'rock', 'paper', or ''scissors");
const playerChoice = getPlayerChoice.toLowerCase();


