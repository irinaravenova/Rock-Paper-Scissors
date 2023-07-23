// rock paper scissors

// RULES OF THE GAME
    // rock beats scissors
    // scissors beats paper
    // paper beats rock

const buttons = document.querySelectorAll('.buttons');
const roundInfo = document.querySelector('.round-info-text');
const choices = document.querySelector('.choice-buttons');
const announcement = document.querySelector('.announcement');
const resetButton = document.querySelector('.reset-button');

let computerSelection = getComputerChoice();
let playerPoints = 0;
let computerPoints = 0;
let whichRound = 1;

let round = document.querySelector('.round');
let playerScore = document.querySelector('.your-score');
let compScore = document.querySelector('.comp-score');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent.toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        announcement.innerHTML = result;

        if (result.includes('Win')) {
            ++playerPoints;
            whichRound++;
            console.log(playerPoints, whichRound);

            round.textContent = `Current Round: ${whichRound}`;
            playerScore.textContent = `Your Score: ${playerPoints}`;

            if (playerPoints > 4) { 
                disableChoices();
                let paraWon = document.createElement('p');
                paraWon.textContent = "You have won the game!";
                announcement.appendChild(paraWon);
            }
        }

        else if (result.includes('Lose')) {
            whichRound++;
            ++computerPoints;
            round.textContent = `Current Round: ${whichRound}`;
            compScore.textContent = `Computer Score: ${computerPoints}`;

            if ( computerPoints > 4) {
                disableChoices();
                let paraLost = document.createElement('p');
                paraLost.textContent = "You have lost the game.";
                announcement.appendChild(paraLost);
            }
        }

        else if (result.includes('Tied')) {
            whichRound++;
            round.textContent = `Current Round: ${whichRound}`;
        }

    });
});

resetButton.addEventListener('click', resetGame);

function getComputerChoice() {
    const choiceArray = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choiceArray.length);
    const computerChoice = choiceArray[randomIndex].toLowerCase();
    return computerChoice;
};

function playRound (playerSelection, computerSelection) {

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

function resetGame() {
    enableChoices();
    round.textContent = "Current Round: 1";
    playerScore.textContent = "Your Score: 0";
    compScore.textContent = "Computer Score: 0";
    announcement.textContent = "";
    playerPoints = 0;
    computerPoints = 0;
    whichRound = 1;
};

function disableChoices() {
    buttons.forEach((button) => { 
        button.disabled = true;
    })
};

function enableChoices() {
    buttons.forEach((button) => {
        button.disabled = false;
    })
};

/* function game() {

    let playerPoints = 0;
    let computerPoints = 0;
    let whichRound = 0;

    for (let i = 0; i <= 5; i++) {

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
*/


