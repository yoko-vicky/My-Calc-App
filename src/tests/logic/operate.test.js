import operate from '../../logic/operate';

describe('operate', () => {
  test('should return the calculated result according to the given two numbers and an operator', () => {
    expect(operate('1', '2', '+')).toBe('3');
    expect(operate('8', '2', '-')).toBe('6');
    expect(operate('8', '2', 'x')).toBe('16');
    expect(operate('16', '2', '÷')).toBe('8.0');
  });
  test('should return 0 if there is no given numbers and an operator', () => {
    expect(operate()).toBe('0');
  });
});
