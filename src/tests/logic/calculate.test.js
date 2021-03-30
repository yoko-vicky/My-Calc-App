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
      operation: null,
    };
    expect(calculate(data, 'AC')).toEqual(newData);
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
});
