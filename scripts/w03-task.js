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


/* Arrow Function - Multiply Numbers */


/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
