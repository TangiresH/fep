const mathOperation = prompt('Enter operator +, -, *, /');
const numA = prompt('Enter operand A');
const numB = prompt('Enter operand B');

switch (mathOperation) {
    case '+' :
        alert(`${numA} + ${numB} = ${Number(numA) + Number(numB)}`);
        break;
    case '-' :
        alert(`${numA} - ${numB} = ${Number(numA) - Number(numB)}`);
        break;
    case '*' :
        alert(`${numA} * ${numB} = ${Number(numA) * Number(numB)}`);
        break;
    case '/' :
        alert(`${numA} / ${numB} = ${Number(numA) / Number(numB)}`);
        break;
    default:
        alert(`Another case`);
}









