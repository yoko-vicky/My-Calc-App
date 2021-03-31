import Big from 'big.js';

const operate = (number1, number2, operator) => {
  if (!number1 || !number2 || !operator) return '0';

  let result = 0;
  const num1 = typeof number1 !== 'number' ? Big(Number(number1)) : Big(number1);
  const num2 = typeof number2 !== 'number' ? Big(Number(number2)) : Big(number2);

  switch (operator) {
    case '+':
      result = num1.plus(num2);
      break;
    case '-':
      result = num1.minus(num2);
      break;
    case 'x':
      result = num1.times(num2);
      break;
    case '÷':
      result = num1.div(num2).toFixed(1);
      break;
    default:
      result = 0;
      break;
  }
  return result.toString();
};

export default operate;
