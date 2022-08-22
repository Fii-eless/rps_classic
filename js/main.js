//define a function to initialize game
const gameStart = () => {
    const startGame = confirm('Shall we play a game of Rock-Paper-Scissors?');
    startGame ? playRounds() : alert("You're not in the mood, maybe later!");
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

        // let round = 1;
        let computerScore = 0;
        let playerScore = 0;
        const computerWins = computerTriumph(result);
        const playerWins = playerTriumph(result);

        if (computerWins) {
            // round++
            computerScore++;
            console.log(`Computer : ${computerScore}\nPlayer : ${playerScore}`);
            break;
        } else if (playerWins){
            // round++
            playerScore++;
            console.log(`Computer : ${computerScore}\nPlayer : ${playerScore}`);
            break;
        }else {
            // round++
            computerScore++;
            playerScore++;
            console.log(`Computer : ${computerScore}\nPlayer : ${playerScore}`);
            break;
        }
        // const playOn = playRounds();
        // const callWinner = declareChamp(computerScore , playerScore);

    //    const playOn = playRounds();
    //    if (playOn) {
    //     continue
    //    } else {
    //     return callWinner;
    //     break;
       //}
        
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

    let round = 1;
    // let computerScore = 0;
    // let playerScore = 0;
    const computerTriumph = (result) => {
        const compWins = result.includes("Computer wins");
        return compWins;
    }
    const playerTriumph = (result) => {
        const pWins = result.includes("You win");
        return pWins;
    }
    // displayScores = () => (
    //     if (computerWins) {
    //         computerScore++;
    //         console.log(`Round ${round}:\nComputer(${computerScore}) : Player(${playerScore})`)
    //     } else if (playerWins){
    //         playerScore++;
    //         console.log(`Round ${round}:\nComputer(${computerScore}) : Player(${playerScore})`)
    //     }else {
    //         computerScore++;
    //         playerScore++;
    //         console.log(`Round ${round}:\nComputer(${computerScore}) : Player(${playerScore})`)
    //     }
    // )
   
const playRounds = () => {
    while (round <= 5) {
        console.log(`Round ${round}`);
        playGame();
        round++;
    }
}

const declareChamp = (computerScore , playerScore) => {
    if (computerScore === playerScore) {
        console.log(`Computer(${computerScore} : Player(${playerScore}\nIt is a tie!))`);
    } else if (computerScore > playerScore) {
        console.log(`Computer(${computerScore} : Player(${playerScore}\nComputer is Champion!))`);
    } else {
        console.log(`Computer(${computerScore} : Player(${playerScore}\nYou are Champion!))`);
    }
}

gameStart();
