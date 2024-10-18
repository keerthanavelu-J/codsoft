let displayValue = '';  // This will store the full expression (e.g., "7+3")
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function appendOperator(op) {
    if (displayValue === '') return;
    operator = op;
    displayValue += ` ${op} `;  // Add operator to the displayValue string
    document.getElementById('display').value = displayValue;
}

function appendDot() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        document.getElementById('display').value = displayValue;
    }
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    document.getElementById('display').value = '';
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        let result = eval(displayValue);  // Calculate the expression from displayValue
        displayValue = result;
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}
