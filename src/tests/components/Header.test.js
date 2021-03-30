import React from 'react';
// import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';

// describe('Header', () => {
//   test('renders Header component ', () => {
//     render(<Header />);
//     // screen.debug();
//     // eslint-disable-next-line no-unused-expressions
//     expect(screen.getByText('Yoko Saka')).toBeInTheDocument;
//   });
// });

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
