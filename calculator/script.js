const screen = document.getElementById("screen");
let currentInput = "";
const calculator = document.getElementById("calculator");

const themes = [
  { body: "#a7e9af", calc: "#ffffff" },
  { body: "#ffeaa7", calc: "#dfe6e9" },
  { body: "#74b9ff", calc: "#dff9fb" },
  { body: "#fd79a8", calc: "#ffeaa7" },
  { body: "#fab1a0", calc: "#81ecec" }
];

let themeIndex = 0;

function appendValue(val) {
  currentInput += val;
  screen.textContent = currentInput;
}

function clearScreen() {
  currentInput = "";
  screen.textContent = "";
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    screen.textContent = currentInput;
  } catch (e) {
    screen.textContent = "Error";
  }
}

function changeTheme() {
  themeIndex = (themeIndex + 1) % themes.length;
  const theme = themes[themeIndex];

  document.body.style.backgroundColor = theme.body;
  calculator.style.backgroundColor = theme.calc;
}