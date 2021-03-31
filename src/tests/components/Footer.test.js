import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../../components/Footer';

test('full app rendering/navigating', () => {
  render(<Footer />, { wrapper: MemoryRouter });
  // eslint-disable-next-line no-unused-expressions
  expect(screen.getByText('Yoko Saka')).toBeInTheDocument;
});

describe('Test suits for Footer with Link', () => {
  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
