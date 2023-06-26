// rock paper scissors

// RULES
    // rock beats scissors
    // scissors beats paper
    // paper beats rock

function getComputerChoice() {

    const choiceArray = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choiceArray.length);
    const computerChoice = choiceArray[randomIndex].toLowerCase();
    return computerChoice;
};

// single round of RPS
function playRound (playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (computerSelection == 'paper') {
        if (playerSelection == 'scissors') {
            return "You Win! Scissors beats Paper";
        }
        else if (playerSelection == 'rock') {
            return "You Lose! Paper beats Rock";
        }
    }

    else if (computerSelection == 'rock') {
        if (playerSelection == 'scissors') {
            return "You lose! Rock beats Scissors";
        }
        else if (playerSelection == 'paper') {
            return "You Win! Paper beats Rock";
        }
    }

    else if (computerSelection == 'scissors') {
        if (playerSelection == 'rock') {
            return "You Win! Rock beats Scissors";
        }
        else if (playerSelection == 'paper') {
            return "You Lose! Scissors beats Paper";
        }
    }

    if (computerSelection == playerSelection) {
        return 'You have tied!';
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection, computerSelection);
