import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { HomePage } from './home-page';

describe('HomePage', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { getByText } = render(<HomePage />);
    expect(getByText('home-page works!')).toBeTruthy();
  });
});
