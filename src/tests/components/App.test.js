import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from '../../components/App';

describe('App', () => {
  test('renders App component ', () => {
    render(<App />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('AC')).toBeInTheDocument;
  });
  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
