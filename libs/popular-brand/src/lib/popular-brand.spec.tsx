import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { PopularBrand } from './popular-brand';

describe('PopularBrand', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { getByText } = render(<PopularBrand />);
    expect(getByText('popular-brand works!')).toBeTruthy();
  });
});
