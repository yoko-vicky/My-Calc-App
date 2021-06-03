import operate from './operate';

const calculate = (data, btnName) => {
  const newData = { ...data };
  let { total, next, operation } = newData;

  if (btnName === 'AC') {
    total = '';
    next = '';
    operation = '';
    console.log('total', total);
    console.log('next', next);
    console.log('operation', operation);
  } else if (btnName === '+/-') {
    if (next) {
      next = (next * -1).toString();
    } else if (total) {
      total = (total * -1).toString();
    }
    console.log('total', total);
    console.log('next', next);
    console.log('operation', operation);
  } else if (btnName === '÷' || btnName === '-' || btnName === '+' || btnName === 'x') {
    operation = !next ? btnName : null;
    console.log('total', total);
    console.log('next', next);
    console.log('operation', operation);
  } else if (btnName === '%') {
    if (next) {
      next = (next / 100).toString();
    } else {
      total = (total / 100).toString();
    }
    console.log('total', total);
    console.log('next', next);
    console.log('operation', operation);
  } else if (btnName === '=') {
    total = operate(total, next, operation);
    next = '';
    operation = null;
    console.log('total', total);
    console.log('next', next);
    console.log('operation', operation);
  } else if (!operation) {
    total += btnName;
    console.log('total 46', total);
    console.log('next', next);
    console.log('operation', operation);
  } else {
    next += btnName;
    console.log('total', total);
    console.log('next', next);
    console.log('operation', operation);
  }

  return { total, next, operation };
};

export default calculate;
