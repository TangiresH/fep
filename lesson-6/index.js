console.log(max(1, 8, 37, 5, 17));
console.log(max2(1, 8, 37, 5, 17));

function max(...numbers) {
    let largestNumber = numbers[0]

    for (let i = 1; i < numbers.length; ++i) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }

    return `${numbers.length} element test, must return ${largestNumber}`;
}

function max2(...numbers) {
    let shouldSort = false;

    for (let i = 0; i < numbers.length - 1; i++) {
        let firstNum = numbers[i];

        if (firstNum > numbers[i + 1]) {
            numbers[i] = numbers[i + 1];
            numbers[i + 1] = firstNum;
            shouldSort = true;
        }
    }

    if (shouldSort) {
        max2(numbers);
    }

    return `${numbers.length} element test, must return ${numbers.pop()}`;
}





