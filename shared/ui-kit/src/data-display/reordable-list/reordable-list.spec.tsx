import { render } from '@testing-library/react';

import ReordableList from './reordable-list';

describe('ReordableList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReordableList />);
    expect(baseElement).toBeTruthy();
  });
});
