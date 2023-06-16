// rock paper scissors

const choiceArray = ['Rock', 'Paper', 'Scissors'];
const computerSelection = getComputerChoice(choiceArray);
const userEntryField = document.querySelector('.userEntryField');
const userSubmit = document.querySelector('.userSubmit');

let playerSelection;

function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const computerChoice = arr[randomIndex];
    return computerChoice;
};

function checkUserEntry() {

    const userEntry = userEntryField.value.toLowerCase();

    if (userEntry === 'rock' 
        || (userEntry) === 'paper' 
        || (userEntry) === 'scissors') {
            playerSelection = userEntry;
            console.log(playerSelection);
            return playerSelection;
        }
    else {
        alert('Please enter rock, paper, or scissors');
        userEntryField.textContent = '';
    }

    userEntryField.value = '';

}

userSubmit.addEventListener('click', checkUserEntry);

console.log(computerSelection, checkUserEntry);