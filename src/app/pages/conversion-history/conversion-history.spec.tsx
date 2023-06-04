import { render } from '@testing-library/react';

import ConversionHistory from './conversion-history';

describe('ConversionHistory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConversionHistory />);
    expect(baseElement).toBeTruthy();
  });
});
