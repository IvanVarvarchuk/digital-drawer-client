import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useConvertionHistoryState from './use-convertion-history-state';

describe('useConvertionHistoryState', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useConvertionHistoryState());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
