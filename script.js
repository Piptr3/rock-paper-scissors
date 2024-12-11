function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x == 0) {
        return 'Rock';
    } else if (x == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getHumanChoice() {
    do {
        let x = prompt("Choose");
        if (x == "Rock" || x == 'Paper' || x == "Scissors" ) {
            return x;
        }
    } while(true)   
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (computerChoice == humanChoice) {
        console.log("Draw! " + humanChoice + " draws " + computerChoice);
        return 'draw';
    } else if (
        (computerChoice == 'Paper' && humanChoice == 'Rock') ||
        (computerChoice == 'Rock' && humanChoice == 'Scissors') || 
        (computerChoice == 'Scissors' && humanChoice == 'Paper')
    ) {
        console.log("You lost! " + computerChoice + " beats " + humanChoice);
        return 'lose';
    } else {
        console.log("You won! " + humanChoice + " beats " + computerChoice)
        return 'win';
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        const result = playRound();
        if(result == 'win') {
            humanScore++;
        } else if (result == 'lose') {
            computerScore++;
        }
    }
    console.log("Human score: " + humanScore + ", Computer score: " + computerScore)
}

playGame();