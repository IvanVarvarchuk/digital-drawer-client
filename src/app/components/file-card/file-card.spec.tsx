import { render } from '@testing-library/react';

import FileCard from './file-card';

describe('FileCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FileCard name={''} link={''} />);
    expect(baseElement).toBeTruthy();
  });
});
