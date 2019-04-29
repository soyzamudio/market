import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Footer } from './footer';

describe('Footer', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('footer works!')).toBeTruthy();
  });
});
