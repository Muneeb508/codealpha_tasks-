// script.js
let display = document.getElementById('display');

// Function to append values to the display
function appendToDisplay(value) {
  display.value += value;
}
function appendPercentage() {
    let currentValue = display.value;
    if (currentValue) {
      // Convert the current value to a percentage
      display.value = eval(currentValue) / 100;
    }
  }
let isOpenParenthesis = true; // Tracks whether to add '(' or ')'
  // Function to append parentheses
  function appendParentheses() {
    if (isOpenParenthesis) {
      appendToDisplay('('); // Add '('
    } else {
      appendToDisplay(')'); // Add ')'
    }
    isOpenParenthesis = !isOpenParenthesis; // Toggle the state
  }
// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to calculate the result
function calculate() {
  try {
    let result = eval(display.value); // Using eval to evaluate the expression
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}