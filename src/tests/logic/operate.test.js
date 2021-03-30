import operate from '../../logic/operate';

describe('operate', () => {
  test('should return the calculated result according to the given arguments', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });
});
