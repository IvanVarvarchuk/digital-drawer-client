import { render } from '@testing-library/react';

import ApiKeyAccordion from './api-key-accordion';

describe('ApiKeyAccordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApiKeyAccordion />);
    expect(baseElement).toBeTruthy();
  });
});
