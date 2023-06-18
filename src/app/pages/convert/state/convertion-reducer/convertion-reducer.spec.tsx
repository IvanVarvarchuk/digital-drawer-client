import { render } from '@testing-library/react';

import reducer, {
  ConvertionReducerState,
  ConvertionReducerActionType,
} from './convertion-reducer';

describe('Convertion reducer', () => {
  let initialState: ConvertionReducerState;

  beforeEach(() => {
    initialState = {
      file: null,
      queue: [],
      isLoading: false,
    };
  });

  it('should add a file to the queue', () => {
    const file = new File(['test'], 'test.txt');
    const action: ConvertionReducerActionType = { type: 'ADD_FILE', payload: file };
    const state = reducer(initialState, action);
    expect(state.file).toEqual(file);
    expect(state.queue.length).toBe(1);
    expect(state.queue[0].file).toEqual(file);
  });

  it('should remove a file from the queue', () => {
    const file1 = new File(['test1'], 'test1.txt');
    const file2 = new File(['test2'], 'test2.txt');
    const stateWithFiles = reducer(initialState, { type: 'ADD_FILE', payload: file1 });
    const action: ConvertionReducerActionType = { type: 'REMOVE_FILE', payload: 0 };
    const state = reducer(stateWithFiles, action);
    expect(state.file).toBeNull();
    expect(state.queue.length).toBe(0);
  });

  it('should reorder files in the queue', () => {
    const file1 = new File(['test1'], 'test1.txt');
    const file2 = new File(['test2'], 'test2.txt');
    const stateWithFiles = reducer(initialState, { type: 'ADD_FILE', payload: file1 });
    const stateWithTwoFiles = reducer(stateWithFiles, { type: 'ADD_FILE', payload: file2 });
    const action: ConvertionReducerActionType = { type: 'REORDER_FILE', payload: { oldIndex: 1, newIndex: 0 } };
    const state = reducer(stateWithTwoFiles, action);
    expect(state.file).toEqual(file2);
    expect(state.queue.length).toBe(2);
    expect(state.queue[0].file).toEqual(file2);
    expect(state.queue[1].file).toEqual(file1);
  });
});
