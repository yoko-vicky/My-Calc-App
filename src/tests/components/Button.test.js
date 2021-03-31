import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button', () => {
  test('renders Button component ', () => {
    render(<Button />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getAllByRole('button')).toBeInTheDocument;
  });
  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button name="+" onClick={handleClick} key="+" />);
    fireEvent.click(screen.getByText('+'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
