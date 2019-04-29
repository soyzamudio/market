import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { SectionHeader } from './section-header';

describe('SectionHeader', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { getByText } = render(<SectionHeader />);
    expect(getByText('section-header works!')).toBeTruthy();
  });
});
