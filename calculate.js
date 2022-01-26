//
// Variables
//
let context = "";
let numbers = [];
let score = "";
let isInputsValid = true;
const inputs = [...document.querySelectorAll("input")];

//
// Methods
//
/**
 * Calculate the score
 * @param  {String, Array}    string A context
 *                            array Numbers to calculate
 * @return {Number || String} Score or text to show
 */
const calculateByContext = (context, numbers) => {
  if (!numbers.length) return;

  // check if number from array is not really a number
  numbers.forEach((number) => {
    if (isNaN(number)) {
      isInputsValid = false;
    }
  });

  // if in array of number is one non-number element return text
  if (!isInputsValid) return "Wrong input data";

  // calculations depends on context
  if (context === "sum") {
    return numbers.reduce((a, b) => +a + +b);
  }

  if (context === "substract") {
    return numbers.reduce((a, b) => +a - +b);
  }

  if (context === "multiply") {
    return numbers.reduce((a, b) => +a * +b);
  }
};

/**
 * Handle click events
 * @param  {Event} event The event object
 */
const clickHandler = (event) => {
  // check context
  event.target.classList.contains("square--red") && (context = "sum");
  event.target.classList.contains("square--yellow") && (context = "substract");
  event.target.classList.contains("square--blue") && (context = "multiply");

  // add numbers from inputs to array
  inputs.forEach((input) => {
    if (input.value === "") return;

    numbers.push(parseInt(input.value));
  });

  score = calculateByContext(context, numbers);

  // show score if its not undefined
  if (score !== undefined) document.querySelector("output").innerHTML = score;

  // variables reset
  numbers = [];
  context = "";
  isInputsValid = true;
};

// Listen for click events
document.addEventListener("click", clickHandler, false);
