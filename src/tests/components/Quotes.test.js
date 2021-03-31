import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Quotes from '../../components/Quotes';

describe('Quotes', () => {
  test('renders Quotes component ', () => {
    render(<Quotes />);
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate quia perferendis, et esse dolor officia sit, blanditiis dignissimos, dolore provident quaerat ullam. Debitis, mollitia! Perspiciatis mollitia odit natus explicabo.';
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText(text)).toBeInTheDocument;
  });
  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Quotes />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
