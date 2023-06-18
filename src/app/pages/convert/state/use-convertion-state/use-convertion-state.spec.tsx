import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useConvertionState, { ConvertionContextProvider } from './use-convertion-state';

describe('ConvertionContext', () => {
  it('should return initial state', () => {
    const { result } = renderHook(() => useConvertionState(), {
      wrapper: ConvertionContextProvider,
    });
    expect(result.current.state.file).toBe(null);
    expect(result.current.state.queue.length).toBe(0);
  });

  it('should update state on dispatch', () => {
    const { result } = renderHook(() => useConvertionState(), {
      wrapper: ConvertionContextProvider,
    });
    const newFile = new File(['test'], 'test.txt', { type: 'text/plain' });
    const newQueue = [{file: newFile}];
    result.current.dispatch({ type: 'ADD_FILE', payload: newFile });
    expect(result.current.state.file).toEqual(newFile);
    //expect(result.current.state.queue).toEqual(newQueue);
  });
});