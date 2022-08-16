//define a function to initialize game
gameStart = () => {
    let startGame = confirm('Shall we play a game of Rock-Paper-Scissors?');

    startGame ? getPlayerChoice() : endGame() ;
    getPlayerChoice === 'rock' || getPlayerChoice === 'paper' || getPlayerChoice === 'scissors' ? gamePlay() : didNotChoose();
    
}

//create function that makes a random choice between rock, paper and scissors

getComputerChoice = () => {
    const rps = ['rock' , 'paper' , 'scissors'];
    const computerChoice = rps[Math.floor(Math.random() * 3)];
    return computerChoice;
}
const computerChoice = getComputerChoice();
console.log(computerChoice);

//define a function that lets player enter rock, paper or scissors
getPlayerChoice = () => {
    const choose = prompt("Please enter 'rock', 'paper', or ''scissors");
const playerChoice = choose.trim().toLowerCase();
return playerChoice;
}


//define a function for gameplay logic using playerChoice vs computerChoice

 gamePlay = (computerChoice , playerChoice) => {
    computerChoice === playerChoice ? console.log('It is a tie game!') :
    computerChoice === 'rock' && playerChoice === 'paper' ? console.log(`You win! ${playerChoice} covers ${computerChoice}`) :
    computerChoice === 'rock' && playerChoice === 'scissors' ? console.log(`Computer wins! ${computerChoice} crushes ${playerChoice}`) :
    computerChoice === 'paper' && playerChoice === 'rock' ? console.log(`Computer wins! ${computerChoice} covers ${playerChoice}`) :
    computerChoice === 'paper' && playerChoice === 'scissors' ? console.log(`You win! ${playerChoice} cuts ${computerChoice}`) :
    gcomputerChoice === 'scissors' && playerChoice === 'rock' ? console.log(`You win! ${playerChoice} crushes ${computerChoice}`) :
    console.log(`Computer wins! ${computerChoice} cuts ${playerChoice}`)
}
gamePlay();

endGame = () => alert("You're not in the mood, maybe later!");

didNotChoose = () => alert("You did not enter 'rock', 'papper' or 'scissors'. Let's try again!")

