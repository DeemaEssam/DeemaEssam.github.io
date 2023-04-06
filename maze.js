// Define variables for the maze, player, and end goal
const maze = document.getElementById("maze");
const player = document.getElementById("player");
const goal = document.getElementById("goal");

// Define variables for the player's position
let playerX = 0;
let playerY = 0;

// Define variables for the maze's dimensions
const mazeWidth = maze.offsetWidth;
const mazeHeight = maze.offsetHeight;

// Define variables for the player's dimensions
const playerWidth = player.offsetWidth;
const playerHeight = player.offsetHeight;

// Define variables for the end goal's position
const goalX = mazeWidth - goal.offsetWidth;
const goalY = mazeHeight - goal.offsetHeight;

// Define function to move player up
function moveUp() {
  playerY -= 10;
  if (playerY < 0) {
    playerY = 0;
  }
  player.style.top = playerY + "px";
  checkForWin();
}

// Define function to move player down
function moveDown() {
  playerY += 10;
  if (playerY + playerHeight > mazeHeight) {
    playerY = mazeHeight - playerHeight;
  }
  player.style.top = playerY + "px";
  checkForWin();
}

// Define function to move player left
function moveLeft() {
  playerX -= 10;
  if (playerX < 0) {
    playerX = 0;
  }
  player.style.left = playerX + "px";
  checkForWin();
}

// Define function to move player right
function moveRight() {
  playerX += 10;
  if (playerX + playerWidth > mazeWidth) {
    playerX = mazeWidth - playerWidth;
  }
  player.style.left = playerX + "px";
  checkForWin();
}

// Define function to check if player has reached the end goal
function checkForWin() {
  if (playerX === goalX && playerY === goalY) {
    alert("Congratulations! You win!");
  }
}

// Add event listeners to the buttons to move the player
document.getElementById("upButton").addEventListener("click", moveUp);
document.getElementById("downButton").addEventListener("click", moveDown);
document.getElementById("leftButton").addEventListener("click", moveLeft);
document.getElementById("rightButton").addEventListener("click", moveRight);
