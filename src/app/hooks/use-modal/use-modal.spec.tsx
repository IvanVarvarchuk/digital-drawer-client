import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useModal from './use-modal';

describe('useModal', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
