let firstNumber = parseFloat(prompt ('Calculator: Enter the first number: '));  

let mathSymbol = prompt('+, -, * or /');

let secondNumber = parseFloat(prompt ('Enter the second number: '));

if (mathSymbol == '+') { 
    result = firstNumber + secondNumber;  
}
else if (mathSymbol == '-') {
    result = firstNumber - secondNumber;
}
else if (mathSymbol == '*') { 
    result = firstNumber * secondNumber;  
}  
else {  
    result = firstNumber / secondNumber;
}

window.alert("Your answer is " + result);  