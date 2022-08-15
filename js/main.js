
//create function that makes a random choice between rock, paper and scissors

getComputerChoice = () => {
    const rps = ['rock' , 'paper' , 'scissors'];
    const computerChoice = rps[Math.floor(Math.random() * 3)];
    return computerChoice;
}
//console.log(getComputerChoice());
const computerChoice = getComputerChoice();
console.log(computerChoice);

//define a function that lets player enter rock, paper or scissors
const getPlayerChoice = prompt("Please enter 'rock', 'paper', or ''scissors");
const playerChoice = getPlayerChoice.toLowerCase();
console.log(playerChoice);

//define a function for gameplay logic using playerChoice vs computerChoice

/*const gamePlay = (getComputerChoice() , playerChoice) => {
    getComputerChoice() === playerChoice ? console.log('It is a tie game!') :
    getComputerChoice() === 'rock' && playerChoice === 'paper' ? console.log(`You win! ${playerChoice} covers ${getComputerChoice()}`) :
    getComputerChoice() === 'rock' && playerChoice === 'scissors' ? console.log(`Computer wins! ${getComputerChoice()} crushes ${playerChoice}`) :
    getComputerChoice() === 'paper' && playerChoice === 'rock' ? console.log(`Computer wins! ${getComputerChoice()} covers ${playerChoice}`) :
    getComputerChoice() === 'paper' && playerChoice === 'scissors' ? console.log(`You win! ${playerChoice} cuts ${getComputerChoice()}`) :
    getComputerChoice() === 'scissors' && playerChoice === 'rock' ? console.log(`You win! ${playerChoice} crushes ${getComputerChoice()}`) :
    console.log(`Computer wins! ${getComputerChoice()} cuts ${playerChoice}`)
}
gamePlay();*/

