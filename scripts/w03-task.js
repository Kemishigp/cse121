/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    // Inside this function, you can perform the addition operation
    // const sum = number1 + number2;
    return number1+number2; // Return the result of the addition
  }  
  
function addNumbers(){
let addNumber1 = Number(document.querySelector('#add1').value); //Get the first value
let addNumber2 = Number(document.querySelector('#add2').value); //Get the second value
document.querySelector('#sum').value = add(addNumber1, addNumber2); //Get the sum of both values
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
// Inside this function, you can perform the subtraction operation
const subtract = function(number1, number2) {
  return number1-number2; // Return the result of the subtraction
}  
// subtract1, subtract2, subtractNumbers, and difference.
const subtractNumbers = function(){
let subtractNumber1 = Number(document.querySelector('#subtract1').value); //Get the first value
let subtractNumber2 = Number(document.querySelector('#subtract2').value); //Get the second value
document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2); //Get the sum of both values
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
// Using arrow functions, repeat the items in Step 2 with arrow functions named 
// multiply and multiplyNumbers and HTML form controls with IDs of factor1, factor2, multiplyNumbers, and product.
const multiply = (number1,number2) =>{
  return number1 * number2;
}

const multiplyNumbers = () => {
  let multiplyNumber1 = Number(document.querySelector('#factor1').value);
  let multiplyNumber2 = Number(document.querySelector('#factor2').value);
  document.querySelector('#product').value = subtract(multiplyNumber1, multiplyNumber2); //Get the sum of both values

}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
