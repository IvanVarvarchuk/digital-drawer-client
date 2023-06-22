import reducer, {
  ConvertionReducerState,
  ConvertionReducerActionType,
  FileItem,
  TargetFileFormat,
} from './convertion-reducer';

describe('reducer', () => {
  let initialState: ConvertionReducerState;

  beforeEach(() => {
    initialState = {
      file: null,
      queue: [],
      isLoading: false,
    };
  });

  it('should add a new file to the queue', () => {
    const file = new File([], 'test-file');
    const action: ConvertionReducerActionType = {
      type: 'ADD_FILE',
      payload: file,
    };
    const nextState = reducer(initialState, action);
    expect(nextState.file).toBe(file);
    expect(nextState.queue).toHaveLength(1);
    expect(nextState.queue[0].file).toBe(file);
  });

  it('should remove a file from the queue', () => {
    const file1 = new File([], 'test-file-1');
    const file2 = new File([], 'test-file-2');
    const initialQueue: FileItem[] = [{ file: file1 }, { file: file2 }];
    initialState.queue = initialQueue;
    const action: ConvertionReducerActionType = {
      type: 'REMOVE_FILE',
      payload: 1,
    };
    const nextState = reducer(initialState, action);
    expect(nextState.queue).toHaveLength(1);
    expect(nextState.queue[0].file).toBe(file1);
  });

  it('should set the isLoading flag', () => {
    const action: ConvertionReducerActionType = {
      type: 'SET_IS_LOADING',
      payload: true,
    };
    const nextState = reducer(initialState, action);
    expect(nextState.isLoading).toBe(true);
  });

  it('should set the target format for a file in the queue', () => {
    const file1 = new File([], 'test-file-1');
    const file2 = new File([], 'test-file-2');
    const initialQueue: FileItem[] = [{ file: file1 }, { file: file2 }];
    initialState.queue = initialQueue;
    const action: ConvertionReducerActionType = {
      type: 'SET_CONVERSION_FORMAT',
      payload: {
        index: 1,
        format: TargetFileFormat.SVG,
      },
    };
    const nextState = reducer(initialState, action);
    expect(nextState.queue[1].targetFormatt).toBe(TargetFileFormat.SVG);
  });

  it('should reorder files in the queue', () => {
    const file1 = new File([], 'test-file-1');
    const file2 = new File([], 'test-file-2');
    const file3 = new File([], 'test-file-3');
    const initialQueue: FileItem[] = [
      { file: file1 },
      { file: file2 },
      { file: file3 },
    ];
    initialState.queue = initialQueue;
    const action: ConvertionReducerActionType = {
      type: 'REORDER_FILE',
      payload: {
        oldIndex: 0,
        newIndex: 2,
      },
    };
    const nextState = reducer(initialState, action);
    expect(nextState.queue[0].file).toBe(file2);
    expect(nextState.queue[1].file).toBe(file3);
    expect(nextState.queue[2].file).toBe(file1);
  });
});
