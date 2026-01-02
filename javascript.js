function getComputerChoice(){
    let randNum = Math.random(); 

    if (randNum < 1/3) 
        return "rock";
    else if (randNum < 2/3)
        return "paper";
    else 
        return "scissors";
}

function getHumanChoice(){
    return prompt("Choose rock, paper, or scissors");
}

let humanScore = 0; 
let computerScore = 0; 

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase(); 
    computerChoice = computerChoice.toLowerCase(); 

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            return "You lose! Paper beats Rock";
        }
        else if (computerChoice === "scissors") {
            humanScore++;
            return "You win! Rock beats Scissors";
        }
        else return "It's a draw!";
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors"){
            computerScore++;
            return "You lose! Scissors beats Paper";
        }
        else if (computerChoice === "rock") {
            humanScore++;
            return "You win! Paper beats Rock";
        }
        else return "It's a draw!";
    }
    else {
        if (computerChoice === "Rock") {
            computerScore++;
            return "You lose! Rock beats Scissors";
        }
        else if (computerChoice === "scissors") {
            humanScore++;
            return "You win! Scissors beats Paper";
        }
        else return "It's a draw!";
    }
}

function playGame() {
    for (let i = 1; i < 6; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log("Round " + i + ": " + playRound(humanSelection, computerSelection)); 
        console.log("Human: " + humanScore + ", Computer: " + computerScore);
    }
}

playGame(); 