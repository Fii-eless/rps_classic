
getComputerChoice = () => {
    const rps = ['rock' , 'paper' , 'scissors'];
    const computerChoice = rps[Math.floor(Math.random() * 3)];
    return computerChoice;
}

console.log(getComputerChoice());