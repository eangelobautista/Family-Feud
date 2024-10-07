let teamAScore = 0;
let teamBScore = 0;
let rounds = 0;
let currentAnswer = '';
let timer;
const totalRounds = 5;

document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('answer-form').addEventListener('submit', validateAnswer);

function startGame() {
    rounds = 0;
    teamAScore = 0;
    teamBScore = 0;
    updateScores();
    // Start game logic
    startCountdown();
}

function validateAnswer(event) {
    event.preventDefault();
    const answer = document.getElementById('user-answer').value;
    // Validate answer logic here
    displayResults(answer);
}

function displayResults(answer) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML += `<p>Your answer: ${answer}</p>`;
    // Update scores based on correct answers
}

function updateScores() {
    document.getElementById('team-a-score').textContent = teamAScore;
    document.getElementById('team-b-score').textContent = teamBScore;
}

function startCountdown() {
    let timeLeft = 10;
    document.getElementById('countdown-timer').style.display = 'block';
    const timerElement = document.getElementById('timer');
    
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up!");
            // Handle end of round
        } else {
            timerElement.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}
