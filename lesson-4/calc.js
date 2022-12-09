const arrSign = ['+', '-', '*', '/'];
let arrOperand = [];
let i = 0;
let result;
let valueOperand;
let numberOperands;
let mathOperation;


enterOperator(arrSign);
howManyUsedOperands();
getOperand(arrOperand);
calculate(mathOperation);
showResult(mathOperation);

function enterOperator(arrSign) {
    do {
        mathOperation = prompt(`Enter operator (+ - * /)`);
    } while (!arrSign.includes(mathOperation))

}

function howManyUsedOperands() {
    do {
        numberOperands = Number(prompt(`Enter operands count`));
    } while (isNaN(numberOperands) || !((numberOperands >= 1) && (numberOperands <= 5)))
}

function getOperand(arrOperand) {
        do {
            valueOperand = Number(prompt(`Enter a value ${i + 1} operand.`))
            if (isNaN(valueOperand)) continue;
            arrOperand.push(valueOperand);
            i++
        } while (i < numberOperands)
}

function calculate(operand){
    switch(operand){
        case '+':
            add(arrOperand);
            break;
        case '-':
            minus(arrOperand);
            break;
        case '*':
            multiply(arrOperand);
            break;
        case '/':
            divide(arrOperand);
            break;
    }
}
function add(arr) {
    result = 0;
    for(let i = 0; i < arr.length; i++){
        result += arr[i];
    }
}

function minus(arr) {
    result = arr[0];
    for(let i = 1; i < arr.length; i++){
        result -= arr[i];
    }
}

function multiply(arr) {
    result = 1;
    for(let i = 0; i < arr.length; i++){
        result *= arr[i];
    }
}

function divide(arr) {
    result = arr[0];
    for(let i = 1; i < arr.length; i++){
        result /= arr[i];
    }
}

function showResult(op) {
    let goal = '';
    
    goal += `${arrOperand[0]}`
    for (let i = 1; i < arrOperand.length; i++) {
        goal += ` ${op} ${arrOperand[i]}`;
    }

    goal += ` = ${result}`;

    alert(goal);
}
