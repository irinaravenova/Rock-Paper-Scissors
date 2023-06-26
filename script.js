// rock paper scissors

// RULES OF THE GAME
    // rock beats scissors
    // scissors beats paper
    // paper beats rock

const computerSelection = getComputerChoice();
const gameStart = document.querySelector('.gameStartButton');

function getComputerChoice() {
    const choiceArray = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choiceArray.length);
    const computerChoice = choiceArray[randomIndex].toLowerCase();
    return computerChoice;
};

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
            return "You Lose! Rock beats Scissors";
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
        return 'You have Tied!';
    }
}

function game() {

    let playerPoints = 0;
    let computerPoints = 0;
    let whichRound = 0;

    for (let i = 0; i <= 5; i++) {

        // if fifth and final round then declare winner
        if (whichRound == 5) {

            console.log(`Round ${whichRound}!
                The final score is:
                You: ${playerPoints}
                Computer: ${computerPoints}`);

            if (computerPoints > playerPoints) {
                console.log('You lost the game :(');
                return;
            }
            else if (playerPoints > computerPoints) {
                console.log('You won the game :)');
                return;
            }
            else if (playerPoints == computerPoints) {
                console.log('The game is tied!');
                return;
            }
        }

        if (whichRound == 0) {
            console.log(`Let's play!
            The current score is:
            You: ${playerPoints}
            Computer: ${computerPoints}`);
        }
        
        else if (whichRound >= 1) { 
            console.log(`Round ${whichRound}!
                    The current score is:
                    You: ${playerPoints}
                    Computer: ${computerPoints}`);
        }

        // get user input via window prompt
        let playerSelection = prompt('Please enter rock, paper, or scissors:').toLowerCase();

        if (playerSelection === 'rock' 
            || (playerSelection) === 'paper' 
            || (playerSelection) === 'scissors') {

                let str = playRound(playerSelection, computerSelection);

                if (str.includes('Win')) {
                    playerPoints ++;
                    whichRound ++;
                    continue;
                }
                else if (str.includes('Lose')) {
                    computerPoints ++;
                    whichRound ++;
                    continue;
                }
                else if (str.includes('Tied')) {
                    whichRound ++;
                    console.log(`This round ${whichRound} is tied. Score remains the same.`)
                    continue;
                }
        }
        else {
            prompt('Incorrect entry. Please enter rock, paper, or scissors:').toLowerCase();
            continue;
        }
    } 
}

gameStart.addEventListener('click', game);

