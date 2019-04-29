import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Pill } from './pill';

describe('Pill', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { getByText } = render(<Pill />);
    expect(getByText('pill works!')).toBeTruthy();
  });
});
