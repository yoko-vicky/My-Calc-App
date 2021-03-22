import operate from './operate';

const calculate = (data, btnName) => {
  const newData = { ...data };

  if (btnName === 'AC') {
    newData.total = '';
    newData.next = '';
    newData.operation = null;
  } else if (btnName === '+/-') {
    if (newData.next) {
      newData.next = (newData.next * -1).toString();
    } else if (newData.total) {
      newData.total = (newData.total * -1).toString();
    }
  } else if (btnName === '÷' || btnName === '-' || btnName === '+' || btnName === 'x') {
    newData.operation = !newData.next ? btnName : null;
  } else if (btnName === '%') {
    if (newData.next) {
      newData.next = (newData.next / 100).toString();
    } else {
      newData.total = (newData.total / 100).toString();
    }
  } else if (btnName === '=') {
    newData.total = operate(newData.total, newData.next, newData.operation);
    newData.next = '';
    newData.operation = null;
  } else if (!newData.operation) {
    newData.total += btnName;
  } else {
    newData.next += btnName;
  }

  return newData;
};

export default calculate;
