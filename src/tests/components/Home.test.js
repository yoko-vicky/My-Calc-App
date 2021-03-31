import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../components/Home';

describe('Home', () => {
  test('renders Home component ', () => {
    render(<Home />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument;
  });
  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Home />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
