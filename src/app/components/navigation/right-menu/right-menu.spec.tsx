import { render } from '@testing-library/react';

import RightMenu from './right-menu';

describe('RightMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RightMenu mode='vertical' />);
    expect(baseElement).toBeTruthy();
  });
});
