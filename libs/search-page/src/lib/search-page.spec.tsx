import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { SearchPage } from './search-page';

describe('SearchPage', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { getByText } = render(<SearchPage />);
    expect(getByText('search-page works!')).toBeTruthy();
  });
});
