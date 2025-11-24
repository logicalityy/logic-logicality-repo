// ===================================================================
// DO NOT MODIFY THE CODE BELOW - Call or reference them in your code as needed
// ===================================================================

// Takes in a number and updates the readonly display input
function updateDisplay(value) {
  const display = document.getElementById("display");
  display.value = String(value);
}

function getDisplay() {
  const display = document.getElementById("display");
  //parseFloat changes the string into a number we can use
  return display.value;
}

//Set up display to show zero when starting
updateDisplay(0);

console.log("Initial value of display: ", getDisplay());

// ===================================================================
// DO NOT MODIFY THE CODE Above - Call or reference them in your code as needed
// ===================================================================




// Variables

let firstNum = 0;
let currentOperator = '';
let secondNum = 0;
let handleSecondNum = false;
let previousResult = 0;

// Input Handler

function handleInput(input) {
  console.log(`Button clicked: ${input}`);

  if ((!isNaN(input) && (input => 0 && input <= 9))){
    // Int
    handleNumber(input);

  } else if(input == '*' || input == '+' || input == '/' || input == '-'){
    // Operator
    handleOperator(input);

  } else if(input == '='){
    // Calculate
    executeOperation();

  } else if(input == 'C'){
    // Clear
    clearDisplay();

  } else if(input == 'CE'){
    // Clear Entry
    clearEntry();

  } else if(input == '.') {
    // Decimal
    handleDecimal();
  }
  else {
    console.error('Unhandled input: ' + input)
  }

}

// Functions

function add(){
  result = (parseFloat(firstNum) + parseFloat(secondNum));
  return result;
}

function subtract(){
  result = (parseFloat(firstNum) - parseFloat(secondNum));
  return result;

}

function multiply(){
  result = (parseFloat(firstNum) * parseFloat(secondNum));
  return result;

}

function divide(){
  result = (parseFloat(firstNum) / parseFloat(secondNum));
  return result;

}

function handleNumber(number) {

  if (getDisplay() != 0){
    updateDisplay(getDisplay() + number);
  } else{
    updateDisplay(number);
  }

  console.log('Operator: ' + currentOperator);

  if (handleSecondNum == true){
  secondNum = (secondNum + number);
  console.log('2nd num: ' + secondNum)
  return secondNum;
    } else if (handleSecondNum == false){
     
  if (firstNum == 0){
      firstNum = number;
      console.log('1st num: ' + firstNum)
      } else{

      firstNum = (firstNum + number);
      console.log('1st num: ' + firstNum)    
      }

  }
}

function handleOperator(input) {
  
  previousResult = getDisplay();

  currentOperator = input;
  updateDisplay(getDisplay() + input);
  console.log('Current: ' + firstNum + currentOperator + secondNum);
  handleSecondNum = true;
}

function handleDecimal(){
  if (handleSecondNum == false){
    // First num

    if (!firstNum.includes('.')) {
      // Not already a decimal
      handleNumber('.');
    };

  } else if(handleSecondNum == true) {
    if (!secondNum.includes('.')) {
      // Not already a decimal
      handleNumber('.');
    };

  }
}

function executeOperation() {

  if(currentOperator == '+'){
    updateDisplay(add());

  } else if(currentOperator == '-'){
    updateDisplay(subtract());

  } else if(currentOperator == '*'){
    updateDisplay(multiply());

  } else if (currentOperator == '/'){
    updateDisplay(divide());

  } else {
    return;
  }

  resetVars(result, true)

}

function clearDisplay(){

    previousResult = 0;
    updateDisplay(0);
    resetVars(0, false)
}

function clearEntry(){

    firstNum = previousResult;
    updateDisplay(previousResult);

}

function resetVars(num, num2) {
    firstNum = num;
    secondNum = 0;
    currentOperator = '';
    handleSecondNum = num2;
    console.log('Current: ' + firstNum + currentOperator + secondNum);
}