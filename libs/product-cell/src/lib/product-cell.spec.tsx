import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { ProductCell } from './product-cell';

describe('ProductCell', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { getByText } = render(<ProductCell />);
    expect(getByText('product-cell works!')).toBeTruthy();
  });
});
