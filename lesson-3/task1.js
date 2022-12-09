let mathOperation = getOperator();
const numA = enterValue('A');
const numB = enterValue('B');
const arr = [
    '+',
    '-',
    '*',
    '/'
];


if (validatorOperand(numA, numB) && validatorOperator(mathOperation)) {
    let result = countNumbers(mathOperation, numA, numB);

    getAnswer(numA, numB, mathOperation, result);
} else {
    alert(`Ви ввели невірні дані.`);
}

function enterValue (operand) {
    return Number(prompt(`Enter operand ${operand}`));
}

function getOperator () {
    return prompt('Enter operator +, -, *, /');
}

function validatorOperator(operator) {
    return arr.includes(mathOperation);
}

function validatorOperand(numA, numB) {
    return !isNaN(numA) && !isNaN(numB);
}

function countNumbers (mathOperation, numA, numB) {
    switch (mathOperation) {
        case '+' :
            return numA + numB;
        case '-' :
            return numA - numB;
        case '*' :
            return numA * numB;
        case '/' :
            return numA / numB;
    }
}

function getAnswer (numA, numB, mathOperation, result) {
    alert(`${numA} ${mathOperation} ${numB} = ${result}`);
}
