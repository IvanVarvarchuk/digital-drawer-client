import { render } from '@testing-library/react';

import DetetedConvertionsList from './deteted-convertions-list';

describe('DetetedConvertionsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetetedConvertionsList />);
    expect(baseElement).toBeTruthy();
  });
});
