import calculate from '../../logic/calculate';

describe('calculate', () => {
  test('should reset all the values in data by clicking "AC"', () => {
    const data = {
      total: 36,
      next: 8,
      operation: '+',
    };
    const newData = {
      total: '',
      next: '',
      operation: '',
    };
    const result = calculate(data, 'AC');
    expect(result).toEqual(newData);
  });
  test('should change the positive and negative by clicking "+/-"', () => {
    const data = {
      total: 8,
      next: '',
      operation: 'x',
    };
    const newData = calculate(data, '+/-');
    expect(newData.total).toEqual('-8');
  });

  test('should set the operator with the given operator by clicking a operator', () => {
    const data = {
      total: '',
      next: '',
      operation: '',
    };
    const operators = ['+', '-', '÷', 'x'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const newData = calculate(data, operator);
    expect(newData.operation).toEqual(operator);
  });

  test('should devided the given number by 100 to make it the percent number by clicking "%"', () => {
    const data = {
      total: '',
      next: '10',
      operation: '',
    };
    const newData = calculate(data, '%');
    expect(newData.next).toBe('0.1');
  });

  test('should set the calculated result to total by clicking "="', () => {
    const data = {
      total: '3',
      next: '4',
      operation: '+',
    };
    const newData = calculate(data, '=');
    expect(newData.total).toBe('7');
  });

  test('should set the clicked value to total if the operation value does not exist when clicking the numbers', () => {
    const data = {
      total: '',
      next: '',
      operation: null,
    };
    const randomNum = Math.floor(Math.random() * 9);
    const newData = calculate(data, randomNum.toString());
    expect(newData.total).toBe(randomNum.toString());
  });
  test('should set the clicked value to next if the operation value exists when clicking the numbers', () => {
    const data = {
      total: '8',
      next: '',
      operation: '+',
    };
    const randomNum = Math.floor(Math.random() * 9);
    const newData = calculate(data, randomNum.toString());
    expect(newData.next).toBe(randomNum.toString());
  });
});
