//define a function to initialize game
const gameStart = () => {
    let startGame = confirm('Shall we play a game of Rock-Paper-Scissors?');
    startGame ? playGame() : alert("You're not in the mood, maybe later!");
}

//define playGame function with loops
const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === "") {
            didNotChoose();
            continue;
        }
        if (!playerChoice) {
            endGame();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice) {
            didNotChoose();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = gamePlay(playerChoice , computerChoice);

        displayResult = (result) => {
            alert(result);
        }
    }

}

//create function that makes a random choice between rock, paper and scissors

const getPlayerChoice = () => {
    prompt("Please enter 'rock', 'paper' or 'scissors'");
}

//define a function that lets player enter rock, paper or scissors
const formatPlayerChoice = (playerChoice) => {
   if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase() ;
   } else {
    return false;
   }
}

const evaluatePlayerChoice = (playerChoice) => {
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return playerChoice;
    } else {
        false;
    }
}
const getComputerChoice = () => {
    const rps = ['rock' , 'paper' , 'scissors'];
    const Choice = rps[Math.floor(Math.random() * 3)];
    return Choice;
}

//define a function for gameplay logic using playerChoice vs computerChoice

 const gamePlay = (computerChoice , playerChoice) => {
    const winner = computerChoice === playerChoice ? 'It is a tie game!' :
    computerChoice === 'rock' && playerChoice === 'paper' ? `You win! ${playerChoice} covers ${computerChoice}` :
    computerChoice === 'rock' && playerChoice === 'scissors' ? `Computer wins! ${computerChoice} crushes ${playerChoice}` :
    computerChoice === 'paper' && playerChoice === 'rock' ? `Computer wins! ${computerChoice} covers ${playerChoice}` :
    computerChoice === 'paper' && playerChoice === 'scissors' ? `You win! ${playerChoice} cuts ${computerChoice}` :
    computerChoice === 'scissors' && playerChoice === 'rock' ? `You win! ${playerChoice} crushes ${computerChoice}` :
    `Computer wins! ${computerChoice} cuts ${playerChoice}`;

    return winner;
}

const didNotChoose = () => alert("You did not enter 'rock', 'paper' or 'scissors'. Let's try again!");

const endGame = () => alert("I guess you changed your mind, maybe next time!");

gameStart();
