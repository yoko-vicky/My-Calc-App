import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../components/App';

describe('App', () => {
  test('renders App component ', () => {
    render(<App />);
    // screen.debug();
    // screen.getByText('0');
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('AC')).toBeInTheDocument;
  });
});
