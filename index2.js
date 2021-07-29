const btnWrapper = document.querySelector('.btn-wrap');
const display = document.querySelector('.display');

let currentOperand = null;
let prevOperand = null;
let operation = null;
let result = null;

function show(){
  console.log(currentOperand, 'currentOperand')
  console.log(prevOperand, 'prevOperand')
  console.log(operation, 'operation')
  console.log(result, 'result')
}


function calculateResult(){

  switch(operation){
    case '+': result = +currentOperand + +prevOperand;
      break;
    case '-': result = prevOperand - currentOperand;
      break;
    case '/': result = prevOperand / currentOperand;
      break;
    case '*': result = prevOperand * currentOperand;
      break;
    case '^': result = prevOperand ** currentOperand;
      break;
    case '%': result = prevOperand % currentOperand;
      break;
    default: result = eval(prevOperand + operation + currentOperand) ? eval(prevOperand + operation + currentOperand) : 'dont know operstion';
  }

  currentOperand = null;
  prevOperand = null;
  operation = null;

  display.textContent += ` = ${result}`;
  return result;
}

function handleOperation(value){

  if(currentOperand === null) return alert('Enter operanda firstly');

  if( value === '=' ){
    prevOperand ? calculateResult() : alert('Enter operation');
  } else {
    operation = value;
    prevOperand = currentOperand;
    currentOperand = null;
    display.textContent += ` ${value} `;
  }

}

function handleOperanda(value){
  currentOperand = currentOperand === null ? value : currentOperand + value;
  display.textContent = currentOperand === null ? currentOperand : display.textContent + value;
}


function cleanDisplay(){
  display.textContent = result !== null ? '' : display.textContent.trim().slice(0, -1);

  if(currentOperand === null){
    operation = null;
    currentOperand = prevOperand;
    prevOperand = null;
  }else {
    currentOperand = currentOperand.slice(0, -1);
    currentOperand = currentOperand.length === 0 ? null : currentOperand;
  }

}

function inputValues(input){  

  if(result) display.textContent = '';
  result = null;

  let enteredValue = input;
  isNaN(+enteredValue) ? handleOperation(enteredValue) : handleOperanda(enteredValue);

}



btnWrapper.addEventListener('click', (e) => {

  if(e.target.textContent === 'DEL') return cleanDisplay();
  inputValues(e.target.textContent);
});


document.addEventListener('keydown', (e) => {
  if(e.key === 'Backspace') cleanDisplay();
})



document.addEventListener('keypress', e => {

  if(e.key === 'Enter') return prevOperand ? calculateResult() : alert('Enter operation');
  inputValues(e.key);

})