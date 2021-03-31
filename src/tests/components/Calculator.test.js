import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Calculator from '../../components/Calculator';

describe('Calculator', () => {
  test('renders Calculator component ', () => {
    render(<Calculator />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText("Let's do some math!")).toBeInTheDocument;
  });
  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Calculator />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
