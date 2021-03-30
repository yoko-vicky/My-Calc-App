import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from '../../components/Display';

describe('Display', () => {
  test('renders Display component ', () => {
    render(<Display />);
    // screen.debug();
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('0')).toBeInTheDocument;
  });
});
