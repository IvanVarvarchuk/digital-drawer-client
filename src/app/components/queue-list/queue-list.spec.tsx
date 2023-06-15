import { render } from '@testing-library/react';

import QueueList from './queue-list';

describe('QueueList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QueueList />);
    expect(baseElement).toBeTruthy();
  });
});
