import operate from './operate';

const calculate = (data, btnName) => {
  const newData = { ...data };

  if (btnName === 'AC') {
    newData.total = '';
    newData.next = '';
    newData.operation = null;
  } else if (btnName === '+/-') {
    newData.total = (newData.total * -1).toString();
    newData.next = (newData.next * -1).toString();
  } else if (btnName === '%' || btnName === '÷' || btnName === '-' || btnName === '+') {
    newData.operation = newData.total === '' ? null : btnName;
  } else if (btnName === '=') {
    newData.total = operate(Number(newData.total), Number(newData.next), newData.operation);
    newData.next = '';
    newData.operation = null;
  } else if (!newData.operation) {
    newData.total += btnName;
  } else {
    newData.next += btnName;
  }
};

export default calculate;
