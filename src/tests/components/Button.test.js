import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button', () => {
  test('renders Button component ', () => {
    render(<Button />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getAllByRole('button')).toBeInTheDocument;
  });
});
