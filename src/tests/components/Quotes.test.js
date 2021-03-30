import React from 'react';
import { render, screen } from '@testing-library/react';
import Quotes from '../../components/Quotes';
// INCLUDE SNAPSHOT TESTING

describe('Quotes', () => {
  test('renders Quotes component ', () => {
    render(<Quotes />);
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate quia perferendis, et esse dolor officia sit, blanditiis dignissimos, dolore provident quaerat ullam. Debitis, mollitia! Perspiciatis mollitia odit natus explicabo.';
    // screen.debug();
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText(text)).toBeInTheDocument;
  });
});
