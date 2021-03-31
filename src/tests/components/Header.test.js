import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../../components/Header';

test('full app rendering/navigating', () => {
  render(<Header />, { wrapper: MemoryRouter });
  // eslint-disable-next-line no-unused-expressions
  expect(screen.getByText('Math Magicians')).toBeInTheDocument;
});
describe('Test suits for Header with Link', () => {
  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
