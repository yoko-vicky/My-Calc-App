import React from 'react';
// import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../components/Footer';

// describe('Footer', () => {
//   test('renders Footer component ', () => {
//     render(<Footer />);
//     // screen.debug();
//     // eslint-disable-next-line no-unused-expressions
//     expect(screen.getByText('Yoko Saka')).toBeInTheDocument;
//   });
// });

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
