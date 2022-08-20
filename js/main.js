//define a function to initialize game
const gameStart = () => {
    const startGame = confirm('Shall we play a game of Rock-Paper-Scissors?');
    startGame ? playGame() : alert("You're not in the mood, maybe later!");
};

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
        const result = gamePlay(computerChoice , playerChoice);
        displayResult(result);
    }
};

//create function that makes a random choice between rock, paper and scissors

const getPlayerChoice = () => {
    return prompt("Please enter 'rock', 'paper' or 'scissors'");
};

//define a function that lets player enter rock, paper or scissors
const formatPlayerChoice = (playerChoice) => {
   if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase() ;
   } else {
    return false;
   }
};

const endGame = () => alert("I guess you changed your mind, maybe next time!");

const evaluatePlayerChoice = (playerChoice) => {
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return playerChoice;
    } else {
        false;
    }
}
const didNotChoose = () => alert("You did not enter 'rock', 'paper' or 'scissors'. Let's try again!");

const getComputerChoice = () => {
    const rps = ['rock' , 'paper' , 'scissors'];
    const Choice = rps[Math.floor(Math.random() * 3)];
    return Choice;
}

//define a function for gameplay logic using playerChoice vs computerChoice

 const gamePlay = (computer , player) => {
    const winner = computer === player ? 'It is a tie game!' :
    computer === 'rock' && player === 'paper' ? `You win! ${player} covers ${computer}` :
    computer === 'rock' && player === 'scissors' ? `Computer wins! ${computer} crushes ${player}` :
    computer === 'paper' && player === 'rock' ? `Computer wins! ${computer} covers ${player}` :
    computer === 'paper' && player === 'scissors' ? `You win! ${player} cuts ${computer}` :
    computer === 'scissors' && player === 'rock' ? `You win! ${player} crushes ${computer}` :
    `Computer wins! ${computer} cuts ${player}`;

    return winner;
}
const displayResult = (result) => {
    console.log(result);}

gameStart();
