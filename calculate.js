let context = "";
let numbers = [];
let score = "";
let isInputsValid = true;

const inputs = [...document.querySelectorAll("input")];

const calculateByContext = (context, numbers) => {
  if (!numbers.length) return;

  numbers.forEach((number) => {
    if (isNaN(number)) {
      isInputsValid = false;
    }
  });

  if (!isInputsValid) return "Wrong input data";

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

document.addEventListener("click", (event) => {
  event.target.classList.contains("square--red") && (context = "sum");
  event.target.classList.contains("square--yellow") && (context = "substract");
  event.target.classList.contains("square--blue") && (context = "multiply");

  inputs.forEach((input) => {
    if (input.value === "") return;

    numbers.push(parseInt(input.value));
  });

  score = calculateByContext(context, numbers);

  if (score !== undefined) document.querySelector("output").innerHTML = score;

  numbers = [];
  context = "";
  isInputsValid = true;
});
