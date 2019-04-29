import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { TrendingBrand } from './trending-brand';

describe('TrendingBrand', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { getByText } = render(<TrendingBrand />);
    expect(getByText('trending-brand works!')).toBeTruthy();
  });
});
