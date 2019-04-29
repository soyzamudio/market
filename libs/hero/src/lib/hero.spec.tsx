import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Hero } from './hero';

describe('Hero', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { getByText } = render(<Hero />);
    expect(getByText('hero works!')).toBeTruthy();
  });
});
