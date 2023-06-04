import { render } from '@testing-library/react';

import Convert from './convert';

describe('Convert', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Convert />);
    expect(baseElement).toBeTruthy();
  });
});
