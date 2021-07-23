let buttons = document.querySelectorAll(".btn");
let display = document.querySelector(".display");

let previousOperanda = "";
let operation = "";
let currentOperanda = "";
let result = "";

buttons.forEach(btn => {
  btn.addEventListener("click", e => {
    if (result) {
      previousOperanda = "";
      operation = "";
      currentOperanda = "";
      result = "";
      display.innerHTML = "";
    }

    if (isNaN(+e.target.innerText)) {
      if (!currentOperanda) return alert("put number");
      if (operation) {
        if (e.target.innerHTML === "=") {
          result = calculate();
          display.innerHTML += ` ${e.target.innerText} `;

          return (display.innerHTML += result);
        } else {
          return alert(`you already have an operanda ${operation}`);
        }
      }
      previousOperanda = currentOperanda;
      currentOperanda = "";
      display.innerHTML += ` ${e.target.innerText} `;
      operation = e.target.innerText;
    } else {
      currentOperanda += e.target.innerText;
      display.innerHTML += e.target.innerText;
    }

    console.log(
      `previous: ${previousOperanda}, operation: ${operation}, current operanda: ${currentOperanda}`
    );
  });
});

document.addEventListener("keydown", e => {
  if (e.keyCode === 8) {
    if(result) return display.innerHTML = ""
    
    if(currentOperanda) return 
  }
});

function calculate() {
  switch (operation) {
    case "+":
      return +previousOperanda + +currentOperanda;
    case "-":
      return previousOperanda - currentOperanda;
    case "/":
      return previousOperanda / currentOperanda;
    case "*":
      return previousOperanda * currentOperanda;
  }
}
