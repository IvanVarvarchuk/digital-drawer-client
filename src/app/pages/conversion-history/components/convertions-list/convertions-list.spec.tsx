import { render } from '@testing-library/react';

import ConvertionsList from './convertions-list';

describe('ConvertionsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConvertionsList />);
    expect(baseElement).toBeTruthy();
  });
});
