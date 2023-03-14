// Your code here
function moveDodgerRight() {
  const dodger = document.getElementById("dodger");
  const rightEdge = parseInt(dodger.style.left) + 40; // get the right edge of the dodger
  if (rightEdge < 400) {
    // check if the dodger hasn't reached the right edge of the game field
    dodger.style.left = `${parseInt(dodger.style.left) + 1}px`; // move the dodger right by 1px
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

function moveDodgerLeft() {
  const dodger = document.getElementById("dodger");
  const leftEdge = parseInt(dodger.style.left);
  if (leftEdge > 0) {
    dodger.style.left = `${leftEdge - 1}px`;
  }
}
