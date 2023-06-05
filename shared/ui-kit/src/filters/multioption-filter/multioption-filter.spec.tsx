import { render } from '@testing-library/react';

import MultioptionFilter from './multioption-filter';

describe('MultioptionFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MultioptionFilter />);
    expect(baseElement).toBeTruthy();
  });
});
