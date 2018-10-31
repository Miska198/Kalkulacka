

const calculator = {
  displayValue: "0",
  firstOperant: null,
  waitingForSecondOperant: false,
  operator: null
}

function updateDisplay(){
  const display = document.querySelector("calculator-screen");
  display.value = calculator.displayValue;
}