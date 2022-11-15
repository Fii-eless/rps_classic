let round = 0;
let compWins = 0;
let youWin = 0;

const getComputerChoice = () => {
    const rps = ['rock' , 'paper' , 'scissors'];
    const Choice = rps[Math.floor(Math.random() * 3)];
    return Choice;
};

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

const computerTriumph = (gamePlay) => {
    const computerWins = gamePlay.includes("Computer wins");
    return computerWins;
}
const playerTriumph = (gamePlay) => {
    const pWins = gamePlay.includes("You win");
    return pWins;
}
const playAgain = () => {
    return " Play Again!"
};

const endRounds = () => {
    return " Your Quest Ends Here!";
}
 
//After 5 rounds of play, function names a champion
function declareChamp (computerScore , playerScore) {
    if (computerScore > playerScore) {
        return "Computer won! You know what to do!";
    } else {
        return "You won! You know what to do!";
    }
}

function playNow(playerChoice) {
    let computerChoice = getComputerChoice();
    if (playerChoice && computerChoice) {
        let playOutcome = gamePlay(computerChoice, playerChoice);
        return playOutcome;
    };  
};

function getScore(playOutcome) {
    let playerWin = playerTriumph(playOutcome);
    let computerWin = computerTriumph(playOutcome);
  
    if (round > 4) {
        return
    }
    if(playerWin || computerWin && round < 5) {
        ++round;
        console.log(round);
    };
    if (playerWin) {
        youWin += 1;
    };
    if (computerWin) {
        compWins += 1;
    };
    rounds.textContent = round;

    const again = playAgain();
    const endGame = endRounds();

    if (round < 5) {
        showResult.textContent = playOutcome + again
    } else if (round == 5) {
        showResult.textContent = playOutcome + endGame;
    } else if (round < 5) {
        return
    };
    playerScore.textContent = youWin;
    computerScore.textContent = compWins;

    if (round == 5) {
        let callWinner = declareChamp(compWins, youWin);
        declaration.textContent = callWinner;
    };
    } 

const choice = document.querySelector('.choices');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
// let playerChoice = "";
let showResult = document.querySelector('#showResult');
let rounds = document.querySelector('#rounds');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');
let declaration = document.querySelector('#declaration');

const chooseRock = (e) => {
    let playerChoice = "";
    playerChoice += "rock";
    let result = playNow(playerChoice);
    getScore(result);
 };
 const choosePaper = (e) => {
    let playerChoice = "";
    playerChoice += "paper";
    let result = playNow(playerChoice);
    getScore(result);
 };
 const chooseScissors = (e) => {
    let playerChoice = "";
    playerChoice += "scissors";
    let result = playNow(playerChoice);
    getScore(result);
 };

rock.addEventListener('click', chooseRock);
paper.addEventListener('click', choosePaper);
scissors.addEventListener('click', chooseScissors);

