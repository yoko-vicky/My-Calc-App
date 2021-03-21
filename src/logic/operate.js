import Big from 'big.js';

const operate = (num1, num2, operator) => {
  let result;

  switch (operator) {
    case '+':
      result = Big(num1) + Big(num2);
      break;
    case '-':
      result = Big(num1) - Big(num2);
      break;
    case 'X':
      result = Big(num1) * Big(num2);
      break;
    case '÷':
      result = Big(num1) / Big(num2);
      break;
    case '%':
      result = Big(num1) * (Big(num2) / 100);
      break;
    default:
      result = '';
      break;
  }
  return result.toString();
};

export default operate;
