let operand1 = '';
let operand2 = '';
let operator = null;

function append(num) {
    if (operator === null) {
        operand1 += num;
        document.getElementById('result').value = operand1;
    } else {
        operand2 += num;
        document.getElementById('result').value = operand2;
    }
}

function setOperator(op) {
    if (operator === null) {
        operator = op;
    }
}

function calculate() {
    let result;
    switch(operator') {
        case '+': result = Number(operand1) + Number(operand2); break;
        case '-': result = Number(operand1) - Number(operand2); break;
        case '*': result = Number(operand1) * Number(operand2); break;
        case '/': result = Number(operand1) / Number(operand2); break;
        default: return;
    }
    document.getElementById('result').value = result;
    operand1 = result;
    operand2 = '';
    operator = null;
}

function clearAll() {
    operand1 = '';
    operand2 = '';
    operator = null;
    document.getElementById('result').value = '';
}
