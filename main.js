// Extended emoji set for different grid sizes
const emojis = ["😀", "😂", "😍", "😎", "🤩", "😜", "🤯", "🥳", "😇", "🤔", "🤖", "👻", 
    "🦄", "🐶", "🐱", "🦊", "🦁", "🐯", "🐼", "🐨", "🐵", "🦉", "🦇", "🐙", 
    "🍉", "🍊", "🍌", "🍓", "🍇", "🍒", "🥥", "🥝", "🍍", "🥕", "🌽", "🥦",
    "⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🎱", "🏓"];

// Sound effects
const sounds = {
flip: new Audio("data:audio/mp3;base64,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"),
match: new Audio("data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFCIiIiIiIjAwMDAwPj4+Pj4+TExMTExMWlpaWlpaZ2dnZ2dnbW1tbW1tc3Nzc3NzYAAABExhdmM1OC4xMzQAAAAAAAAAAAAAAP/7kGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEluZm8AAAAPAAAAEgAAHjMAFBQUFBQiIiIiIiIwMDAwMD4+Pj4+PkxMTExMTFpaWlpaWmdnZ2dnZ21tbW1tbXNzc3Nzc2AAAABNYXZmNTguMjAuMTAwAAAAAAAAAAAAAAD/+1BEAAAB+gJo1AAAILYwTJ6QABBIXmS1PmAmQ3TAon7gIBAECB+/9waB///KBtC//9nX+K5vtbl8PlX9P7aL9qeyd6/kTkk+tY53//9TV6NNW3XRTR0wqmomnaBYGgaBiaj54GwMA0DJDaaDQdD/+xBkaAP9DMACgAAIAkLctT5gJoOIwSI+4CAQDg+Y0TIcK4cB04H/+n/9O7sYf9dv/9fn9v////+hz6/v/rX//5t8p+7///////////+xBEboAAAAowAAAAACAAKMAAAAAQAAAHx8fHx8AAAAPDw8PDwAAAAIyMjIyMgAAABkZGRkZAAAAAyMjIyMjAAAABkZGRkZAAAAABN7eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4//tQZGaA/AAAf4AAAAgAAA/wAAABAAAB/gAAACAAAD/AAAAEeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eH/7UGRngPwAAH+AAAAIAAA/wAAABAAAB/gAAACAAAD/AAAAB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4f/7UEZYgPwAAH+AAAAIAAA/wAAABAAAB/gAAACAAAD/AAAAB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4f/7UGRYAPwAAH+AAAAIAAA/wAAABAAAB/gAAACAAAD/AAAAB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4f/7UERYgPwAAH+AAAAIAAA/wAAABAAAB/gAAACAAAD/AAAAB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4"),
won: new Audio("data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFCIiIiIiIjAwMDAwPj4+Pj4+TExMTExMWlpaWlpaZ2dnZ2dnbW1tbW1tc3Nzc3NzYAAABExhdmM1OC4xMzQAAAAAAAAAAAAAAP/7QGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA//sQZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA//sQZEQO8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA"),
gameOver: new Audio("data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFCIiIiIiIjAwMDAwPj4+Pj4+TExMTExMWlpaWlpaZ2dnZ2dnbW1tbW1tc3Nzc3NzYAAABExhdmM1OC4xMzQAAAAAAAAAAAAAAP/7oGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEluZm8AAAAPAAAAEgAAHjMAFBQUFBQiIiIiIiIwMDAwMD4+Pj4+PkxMTExMTFpaWlpaWmdnZ2dnZ21tbW1tbXNzc3Nzc2AAAABNYXZmNTguMjAuMTAwAAAAAAAAAAAAAAD/+7BkWAAEsFTJaGeAAIqIqWgFJmBIsU1rBiTgCNYqZfARiQECCAACT6gIB73cHgvM/p5P/oCAkFz//0EYPufnPEFBv/9cREIYPB////+hkIiGcUIQgGCAD///+BUVFOT4fD/4vxCEQHJ8Pgj/8sUPgpxdQV1BXmVuZW5lbRgICB8PiDoY//vAZAwABLBFzusPMAKQCMloBSZAUjkXKQyk4ApAIyQgBJwAHxTEQfFMRJ8U9E+hqGqGj6xyOTMzGJxOJhcXTExMYnJyZmbZm22ZttmbbZm2Z//tm2zM222Zm22bbbbb//7M222Z///9ttttttmttttt///tttttttsz/5mZmZmZmf4uLi4uLixQUFBQUFBQYGBgYGBgYKioqKioqKit4FBQUEBAUD4//+QKCgoKCgoICAf//wEBAQEBAQsLC///CwsLCwsLCRn///8lJSUlH//////8HBwcH/////8sLCws////+CgoKA==")
};

// Game settings
let gridSize = 4;
let gameTime = 60;
let timer;
let firstCard, secondCard;
let lockBoard = false;
let matchedPairs = 0;
let score = 0;
let moves = 0;
let isPaused = false;
let soundEnabled = true;
let isGameStarted = false;

let timeRemaining = 60;
let bestScores = JSON.parse(localStorage.getItem("bestScores")) || {
easy: 0,
medium: 0,
hard: 0
};

// Function to start the game
function startGame() {
    if (!isGameStarted) {
      isGameStarted = true;
      isPaused = false;
      
      // Update UI
      document.getElementById('start-btn').textContent = 'Stop';
      document.getElementById('pause-btn').disabled = false;
      
      // Start the timer
      startTimer();
      
      // Enable all cards
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        card.style.pointerEvents = 'auto';
      });
    } else {
      stopGame();
    }
  }

  // Function to stop the game
function stopGame() {
    isGameStarted = false;
    isPaused = false;
    
    // Update UI
    document.getElementById('start-btn').textContent = 'Start';
    document.getElementById('pause-btn').textContent = 'Pause';
    document.getElementById('pause-btn').disabled = true;
    
    // Clear the timer
    clearInterval(timer);
    
    // Reset the timer display
    timeRemaining = 60; // Reset to default time
    document.getElementById('timer').textContent = timeRemaining;
    
    // Reset progress bar
    document.getElementById('progress-fill').style.width = '100%';
    
    // Disable all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.pointerEvents = 'none';
    });
  }

  // Function to pause/resume the game
function togglePause() {
    if (!isGameStarted) return;
    
    isPaused = !isPaused;
    
    if (isPaused) {
      // Pause the game
      document.getElementById('pause-btn').textContent = 'Resume';
      clearInterval(timer);
      
      // Disable all cards
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        card.style.pointerEvents = 'none';
      });
    } else {
      // Resume the game
      document.getElementById('pause-btn').textContent = 'Pause';
      startTimer();
      
      // Enable all cards
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        if (!card.classList.contains('matched')) {
          card.style.pointerEvents = 'auto';
        }
      });
    }
  }

  // Function to start the timer
function startTimer() {
    clearInterval(timer);
    
    const timerElement = document.getElementById('timer');
    const progressFill = document.getElementById('progress-fill');
    const totalTime = timeRemaining;
    
    timer = setInterval(() => {
      if (timeRemaining <= 0) {
        clearInterval(timer);
        gameOver('Time\'s up!');
        return;
      }
      
      timeRemaining--;
      timerElement.textContent = timeRemaining;
      
      // Update progress bar
      const progressWidth = (timeRemaining / totalTime) * 100;
      progressFill.style.width = `${progressWidth}%`;
    }, 1000);
  }

  // Function to handle game over
function gameOver(message) {
    isGameStarted = false;
    
    // Show game over message
    document.getElementById('message-title').textContent = 'Game Over';
    document.getElementById('message-text').textContent = message;
    document.getElementById('message').style.display = 'block';
    
    // Disable all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.pointerEvents = 'none';
    });
  }

// Set difficulty level and update UI
function setDifficulty(level) {
// Clear active state from all buttons
document.querySelectorAll('.difficulty-controls button').forEach(btn => {
btn.classList.remove('active-difficulty');
});

// Set active state to selected button
document.getElementById(level).classList.add('active-difficulty');

// Update game settings based on difficulty
if (level === "easy") {
gridSize = 4;
gameTime = 60;
} else if (level === "medium") {
gridSize = 5;
gameTime = 90;
} else if (level === "hard") {
gridSize = 6;
gameTime = 120;
}

// Update best score display
updateBestScoreDisplay(level);

// Reset game with new settings
resetGame();
}

// Generate the game board with cards
function generateBoard() {
const board = document.getElementById("game-board");
board.innerHTML = "";
board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

// Calculate number of pairs needed based on grid size
const pairsNeeded = Math.floor((gridSize * gridSize) / 2);

// Select random emojis and create pairs
let selectedEmojis = emojis.sort(() => 0.5 - Math.random()).slice(0, pairsNeeded);
let cardValues = [...selectedEmojis];

// Handle odd number of cells for 5x5 grid
if (gridSize === 5) {
// Add a "free" card in the middle
cardValues.push("🎁");
}

// Double the cards to create pairs
cardValues = [...cardValues, ...selectedEmojis].sort(() => 0.5 - Math.random());

// Create card elements
cardValues.forEach((emoji, index) => {
const card = document.createElement("div");
card.classList.add("card");
card.dataset.emoji = emoji;

// For 5x5 grid, mark the center card as "free"
const isFreeCard = (gridSize === 5 && emoji === "🎁" && !cardValues.slice(0, index).includes("🎁"));

card.innerHTML = `
 <div class="card-face card-front">${emoji}</div>
 <div class="card-face card-back">${isFreeCard ? "🎁" : "?"}</div>
`;

// For free card in 5x5 grid, flip it immediately
if (isFreeCard) {
 card.classList.add("flipped", "matched");
 matchedPairs++;
} else {
 card.addEventListener("click", flipCard);
}

board.appendChild(card);
});
}

// Function to flip a card when clicked
function flipCard() {
if (lockBoard || isPaused) return;
if (this === firstCard) return;

// Play flip sound
if (soundEnabled) sounds.flip.play();

this.classList.add("flipped");

if (!firstCard) {
// First card flipped
firstCard = this;
return;
}

// Second card flipped
secondCard = this;
moves++;
document.getElementById("moves").textContent = moves;

// Check for match
checkForMatch();
}

// Check if the two flipped cards match
function checkForMatch() {
const isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;

if (isMatch) {
disableCards();
updateScore(10); // Award 10 points for a match

// Check if all pairs are matched
matchedPairs++;
if (matchedPairs === Math.floor((gridSize * gridSize) / 2)) {
 if (soundEnabled) sounds.won.play();
 clearInterval(timer);
 
 // Update best score if current score is higher
 const difficulty = gridSize === 4 ? "easy" : gridSize === 5 ? "medium" : "hard";
 if (score > bestScores[difficulty]) {
     bestScores[difficulty] = score;
     localStorage.setItem("bestScores", JSON.stringify(bestScores));
     updateBestScoreDisplay(difficulty);
 }
 
 // Show victory message
 setTimeout(() => {
     showMessage("Victory!", `You won with ${score} points in ${moves} moves!`, "🏆");
 }, 500);
}
} else {
unflipCards();
// Penalty for wrong match
updateScore(-2);
}
}

// Update the player's score
function updateScore(points) {
score += points;
document.getElementById("score").textContent = score;
}

// Disable matched cards
function disableCards() {
firstCard.classList.add("matched");
secondCard.classList.add("matched");

firstCard.removeEventListener("click", flipCard);
secondCard.removeEventListener("click", flipCard);

// Play match sound
if (soundEnabled) sounds.match.play();

resetBoard();
}

// Unflip cards that don't match
function unflipCards() {
lockBoard = true;

setTimeout(() => {
firstCard.classList.remove("flipped");
secondCard.classList.remove("flipped");

resetBoard();
}, 1000);
}

// Reset board after each turn
function resetBoard() {
[firstCard, secondCard] = [null, null];
lockBoard = false;
}

// Start/update the game timer
// function startTimer() {
// const timerDisplay = document.getElementById("timer");
// let timeLeft = gameTime;
// timerDisplay.textContent = timeLeft;

// // Update progress bar width
// document.getElementById("progress-fill").style.width = "100%";

// // Clear any existing timer
// if (timer) clearInterval(timer);

// timer = setInterval(() => {
// if (!isPaused) {
//  timeLeft--;
//  timerDisplay.textContent = timeLeft;
 
//  // Update progress bar
//  const percentage = (timeLeft / gameTime) * 100;
//  document.getElementById("progress-fill").style.width = `${percentage}%`;
 
//  if (timeLeft <= 0) {
//      clearInterval(timer);
//      if (soundEnabled) sounds.gameOver.play();
//      showMessage("Time's Up!", `Your final score: ${score}`, "⏱️");
//  }
// }
// }, 1000);
// }

// Toggle pause state
function togglePause() {
isPaused = !isPaused;
document.getElementById("pause-btn").textContent = isPaused ? "Resume" : "Pause";

// Flip all cards face down when paused (if not matched)
if (isPaused) {
document.querySelectorAll(".card:not(.matched)").forEach(card => {
 card.classList.remove("flipped");
});
}
}

// Toggle sound effects
function toggleSound() {
soundEnabled = !soundEnabled;
document.getElementById("sound-btn").textContent = soundEnabled ? "🔊" : "🔇";
}

// Display game message
function showMessage(title, text, icon = "") {
const messageElement = document.getElementById("message");
document.getElementById("message-title").textContent = `${icon} ${title} ${icon}`;
document.getElementById("message-text").textContent = text;
messageElement.style.display = "block";
}

// Close message dialog
function closeMessage() {
document.getElementById("message").style.display = "none";
}

// Update best score display
function updateBestScoreDisplay(difficulty) {
document.getElementById("best-score").textContent = bestScores[difficulty];
}

// Reset the game
function resetGame() {
// Reset game state
matchedPairs = 0;
score = 0;
moves = 0;
isPaused = false;

// Reset displays
document.getElementById("score").textContent = "0";
document.getElementById("moves").textContent = "0";
document.getElementById("pause-btn").textContent = "Pause";

// Clear board and regenerate
generateBoard();

// Start timer
// startTimer();

// Close any open messages
closeMessage();
}

// Initialize game on load
window.onload = function() {
updateBestScoreDisplay("easy");
resetGame();
};