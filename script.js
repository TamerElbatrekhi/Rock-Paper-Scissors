const buttonsContainer = document.querySelector('.buttons-container');
const options = ['Rock', 'Paper', 'Scissors'];

// Creating the Buttons(First Step)
options.forEach(optionText => {
    const button = document.createElement('button');
    button.textContent = optionText;
    buttonsContainer.appendChild(button);
    button.addEventListener('click', () => {
    const player = document.getElementById('pp-choice');
    player.textContent = optionText;
    document.querySelector('.choice-image').src = `media/${optionText}.png`;
    const computer= document.getElementById('cp-choice');
    computer.textContent = getRandomChoice();
    const playerChoice = player.textContent;
    const computerChoice = computer.textContent;
        document.querySelector('.c').src = `media/${computerChoice}.png`;
    determineWinner(playerChoice , computerChoice);
    });
});
// End Creating the Buttons

// creating the computer choices 
function getRandomChoice(){
    return options[Math.floor(Math.random() * 3)];
};
// End Creating the computer choices
// Start creating determineWinner function 
function determineWinner(playerChoice, computerChoice) {
    const resultElement = document.getElementById('game-result');
    const celebrationElement = document.querySelector('.celebration');
    switch (playerChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            resultElement.textContent = "You won! \u{1F525}";
            celebrationElement.style.display = "block";
        break
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
            resultElement.textContent = "Computer won! \u{1F61E}";
            break
        default:
            resultElement.textContent = "It's a tie! \u{1F60A}";
    }
}
// End creating determineWinner function 
document.getElementById('play-again').addEventListener('click', function() {
    const imageElements = document.querySelectorAll('.choice-image');
    imageElements.forEach(element => {
        element.src = "media/Ellipse.png";
    });
    document.querySelector('.celebration').style.display = "none";
    document.getElementById('pp-choice').textContent = "Start!";
    document.getElementById('cp-choice').textContent = "Start!";
    document.getElementById('game-result').textContent = "\u{1F937}";
});