import { render } from '@testing-library/react';

import LeftMenu from './left-menu';

describe('LeftMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LeftMenu mode='inline'/>);
    expect(baseElement).toBeTruthy();
  });
});
