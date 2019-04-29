import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { SectionSubheader } from './section-subheader';

describe('SectionSubheader', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { getByText } = render(<SectionSubheader />);
    expect(getByText('section-subheader works!')).toBeTruthy();
  });
});
