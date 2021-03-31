import operate from './operate';

const calculate = (data, btnName) => {
  const newData = { ...data };
  let { total, next, operation } = newData;

  if (btnName === 'AC') {
    total = '';
    next = '';
    operation = null;
  } else if (btnName === '+/-') {
    if (next) {
      next = (next * -1).toString();
    } else if (total) {
      total = (total * -1).toString();
    }
  } else if (btnName === '÷' || btnName === '-' || btnName === '+' || btnName === 'x') {
    operation = !next ? btnName : null;
  } else if (btnName === '%') {
    if (next) {
      next = (next / 100).toString();
    } else {
      total = (total / 100).toString();
    }
  } else if (btnName === '=') {
    total = operate(total, next, operation);
    next = '';
    operation = null;
  } else if (!operation) {
    total += btnName;
  } else {
    next += btnName;
  }
  return { total, next, operation };
};

export default calculate;
