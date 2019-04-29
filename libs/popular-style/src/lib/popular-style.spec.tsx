import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { PopularStyle } from './popular-style';

describe('PopularStyle', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { getByText } = render(<PopularStyle />);
    expect(getByText('popular-style works!')).toBeTruthy();
  });
});
