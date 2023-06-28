import * as Types from '../../../../../api/axios-client';
/* eslint-disable-next-line */

// export enum TargetFileFormat { DXF, IFC, SVG };
export type FileItem = {
  file: File;
  targetFormatt?: Types.TargetFileFormat;
};
export type ConvertionReducerActionType =
  | { type: 'ADD_FILE'; payload: File }
  | { type: 'SET_TASK_ID'; payload: string }
  | { type: 'REMOVE_FILE'; payload: number }
  | { type: 'SET_IS_LOADING'; payload: boolean }
  | {
      type: 'SET_CONVERSION_FORMAT';
      payload: { format: Types.TargetFileFormat; index: number };
    }
  | { type: 'REORDER_FILE'; payload: { oldIndex: number; newIndex: number } };

export type ConvertionReducerState = {
  file: File | null;
  queue: FileItem[];
  taskId: string | null;
  isLoading: boolean;
};

const reducer = (
  state: ConvertionReducerState,
  action: ConvertionReducerActionType
): ConvertionReducerState => {
  switch (action.type) {
    case 'SET_TASK_ID': {
      return {
        ...state,
        taskId: action.payload,
      };
    }
    case 'ADD_FILE':
      return {
        ...state,
        file: action.payload,
        queue: [
          ...state.queue,
          {
            file: action.payload,
          },
        ],
      };
    case 'REMOVE_FILE':
      return {
        ...state,
        file: null,
        queue: state.queue.filter((_, index) => index !== action.payload),
      };
    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_CONVERSION_FORMAT': {
      const newQueue = [...state.queue];
      newQueue[action.payload.index].targetFormatt = action.payload.format;
      return {
        ...state,
        queue: newQueue,
      };
    }
    case 'REORDER_FILE': {
      const { oldIndex, newIndex } = action.payload;
      const newQueue = [...state.queue];
      const [removed] = newQueue.splice(oldIndex, 1);
      newQueue.splice(newIndex, 0, removed);
      return {
        ...state,
        queue: newQueue,
      };
    }
    default:
      return state;
  }
};
export default reducer;
