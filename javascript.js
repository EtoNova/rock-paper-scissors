function getComputerChoice(){
    let randNum = Math.floor(Math.random() * 3)

    if (randNum === 0) return "rock";
    if (randNum === 1) return "paper";
    return "scissors";
}

let humanScore = 0; 
let computerScore = 0; 

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase(); 
    computerChoice = computerChoice.toLowerCase(); 

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++; 
            return "You <strong>LOSE!</strong> Paper beats Rock";
        }
        else if (computerChoice === "scissors") {
            humanScore++;
            return "You <strong>WIN!</strong> Rock beats Scissors";
        }
        else return "It's a <strong>DRAW!</strong>";
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors"){
            computerScore++;
            return "You <strong>LOSE!</strong> Scissors beats Paper";
        }
        else if (computerChoice === "rock") {
            humanScore++;
            return "You <strong>WIN!</strong> Paper beats Rock";
        }
        else return "It's a <strong>DRAW!</strong>";
    }
    else {
        if (computerChoice === "rock") {
            computerScore++;
            return "You <strong>LOSE!</strong> Rock beats Scissors";
        }
        else if (computerChoice === "scissors") {
            humanScore++;
            return "You <strong>WIN!</strong> Scissors beats Paper";
        }
        else return "It's a <strong>DRAW!</strong>";
    }
}

const clickHandler = (e) => {
    const result = document.querySelector(".result-text");
    const playerScoreText = document.querySelector("#player-score"); 
    const compScoreText = document.querySelector("#comp-score");

    result.innerHTML = playRound(e.target.id, getComputerChoice());

    playerScoreText.textContent = "Player Score: " +  humanScore;
    compScoreText.textContent = "Computer Score: " +  computerScore;

    if (humanScore === 5 || computerScore === 5) {
        buttons.removeEventListener("click", clickHandler); 
        if(humanScore === 5)
            result.innerHTML = "Winner: <strong>Player</strong>!"
        else 
            result.innerHTML = "Winner: <strong>Computer</strong>!"
    }
};

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", clickHandler); 