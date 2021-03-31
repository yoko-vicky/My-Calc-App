import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonPanel from '../../components/ButtonPanel';

describe('ButtonPanel', () => {
  test('renders ButtonPanel component ', () => {
    render(<ButtonPanel />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getAllByRole('button')).toBeInTheDocument;
  });
});
