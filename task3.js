document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentInput = '0';
    let operator = '';
    let firstOperand = '';

    function updateDisplay() {
        display.textContent = currentInput;
    }

    function clear() {
        currentInput = '0';
        operator = '';
        firstOperand = '';
        updateDisplay();
    }

    function handleNumberClick(number) {
        if (currentInput === '0' && number !== '.') {
            currentInput = '';
        }
        if (number === '.' && currentInput.includes('.')) {
            return;
        }
        currentInput += number;
        updateDisplay();
    }

    function handleOperatorClick(op) {
        if (operator !== '') {
            calculate();
        }
        firstOperand = currentInput;
        currentInput = '0';
        operator = op;
    }

    function calculate() {
        const a = parseFloat(firstOperand);
        const b = parseFloat(currentInput);
        if (operator === '+') {
            currentInput = (a + b).toString();
        } else if (operator === '-') {
            currentInput = (a - b).toString();
        } else if (operator === '*') {
            currentInput = (a * b).toString();
        } else if (operator === '/') {
            if (b === 0) {
                currentInput = 'Error';
            } else {
                currentInput = (a / b).toString();
            }
        }
        operator = '';
        firstOperand = '';
        updateDisplay();
    }

    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => {
            handleNumberClick(button.textContent);
        });
    });

    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => {
            handleOperatorClick(button.textContent);
        });
    });

    document.getElementById('clear').addEventListener('click', clear);

    document.getElementById('equals').addEventListener('click', calculate);
});
