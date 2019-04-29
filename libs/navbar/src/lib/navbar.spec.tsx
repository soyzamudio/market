import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Navbar } from './navbar';

describe('Navbar', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('navbar works!')).toBeTruthy();
  });
});
