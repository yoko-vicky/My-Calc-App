import React from 'react';
import { render, screen } from '@testing-library/react';
import AppRouter from '../../routers/AppRouter';

describe('AppRouter', () => {
  test('renders AppRouter component ', () => {
    render(<AppRouter />);
    // screen.debug();
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('Math Magicians')).toBeInTheDocument;
  });
});
