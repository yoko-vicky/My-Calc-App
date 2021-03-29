import operate from './operate';

const calculate = ({
  total, setTotal, next, setNext, operation, setOperation,
}, btnName) => {
  if (btnName === 'AC') {
    setTotal('');
    setNext('');
    setOperation(null);
  } else if (btnName === '+/-') {
    if (next) {
      setNext((next * -1).toString());
    } else if (total) {
      setTotal((total * -1).toString());
    }
  } else if (btnName === '÷' || btnName === '-' || btnName === '+' || btnName === 'x') {
    setOperation(!next ? btnName : null);
  } else if (btnName === '%') {
    if (next) {
      setNext((next / 100).toString());
    } else {
      setTotal((total / 100).toString());
    }
  } else if (btnName === '=') {
    setTotal(operate(total, next, operation));
    setNext('');
    setOperation(null);
  } else if (!operation) {
    setTotal(total + btnName);
  } else {
    setNext(next + btnName);
  }
};

export default calculate;
