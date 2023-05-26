let color = "black";
let click = true;
function populateBoard(size) {
  let board = document.querySelector(".board");
  let square = board.querySelectorAll("div");
  square.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.addEventListener("touchstart", colorSquare);
    square.style.backgroundColor = "ghostwhite";
    square.style.border = "1px dotted rgba(0, 0, 0, 0.1)";
    board.insertAdjacentElement("beforeend", square);
  }
}
populateBoard(16);
function changeSize(input) {
  let sizeValue = document.querySelector("#sizeValue");
  sizeValue.textContent = `${input} by ${input}`;
  populateBoard(input);
}

function colorSquare(event) {
  if (click) {
    event.preventDefault(); // Prevent touch events from scrolling the page
    if (event.type === "mouseover" || event.type === "touchstart") {
      let currentSquare = event.target;
      if (color === "random") {
        currentSquare.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      } else {
        currentSquare.style.backgroundColor = color;
      }
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let board = document.querySelector(".board");
  let square = board.querySelectorAll("div");
  square.forEach((div) => (div.style.backgroundColor = "ghostwhite"));
}

document.querySelector("body").addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON" &&
  event.target.id !== "colorPicker" &&
  event.target.id !== "sizeSlider") {
    click = !click;
    let mode = document.querySelector(".mode");
    let board = document.querySelector(".board")
    if (click) {
      mode.textContent = "Draw is Enabled";
      mode.style.color = "lightgreen";
      board.style.cursor = "crosshair"
    } else {
      mode.textContent = "Draw is Disabled";
      mode.style.color = "red";
      board.style.cursor = "no-drop"
    }
  }
});