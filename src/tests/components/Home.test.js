import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../components/Home';
// INCLUDE SNAPSHOT TESTING

describe('Home', () => {
  test('renders Home component ', () => {
    render(<Home />);
    // screen.debug();
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument;
  });
});
