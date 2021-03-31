import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../../components/NotFound';

describe('NotFound', () => {
  test('renders NotFound component ', () => {
    render(<NotFound />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('This is NotFound 404')).toBeInTheDocument;
  });
});
