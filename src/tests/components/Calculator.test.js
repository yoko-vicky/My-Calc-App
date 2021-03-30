import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from '../../components/Calculator';
// INCLUDE SNAPSHOT TESTING

describe('Calculator', () => {
  test('renders Calculator component ', () => {
    render(<Calculator />);
    // screen.debug();
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText("Let's do some math!")).toBeInTheDocument;
  });
});
