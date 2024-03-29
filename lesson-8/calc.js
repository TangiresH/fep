'use strict';

const calculator = createCalculator(100);

calculator.add('ad');
calculator.add('afg');
calculator.sub('asd');
calculator.add(12);
calculator.sub(2);

// code rewiew

console.log(calculator.get());

calculator.reset();

console.log(calculator.get());


// eslint-disable-next-line require-jsdoc
function isNumber(number) {
  return (number !== '' && !isNaN(number));
}

// eslint-disable-next-line require-jsdoc
function createCalculator(base) {
  const baseNumber = base;

  if (!isNumber(base)) {
    throw new Error('It\'s not a number');
  }

  return {
    add: (number) => {
      if (isNumber(number)) {
        base += number;
      }
    },
    sub: (number) => {
      if (isNumber(number)) {
        base -= number;
      }
    },
    set: (number) => {
      base = number;
    },
    get: () => base,
    reset: () => {
      base = baseNumber;
    },
  };
}
