import { TargetFileFormat } from '../../../../../api/axios-client';
import { FileConvertion } from '../../../FileConvertion';

export type FileItem = {
  file: File;
  targetFormatt?: TargetFileFormat;
};

export type ConversionHistoryReducerActionType =
  | { type: 'SOFT_DELETE_FILE'; payload: string }
  | { type: 'DELETE_FILE'; payload: string }
  | { type: 'CANCEL_DELETE_FILE'; payload: string }
  | { type: 'DOWNLOAD_FILE'; payload: string };

export type ConversionHistoryState = {
  files: FileConvertion[];
  deletedFiles: FileConvertion[];
};
// Початковий стан редюсера
const initialState: ConversionHistoryState = {
  files: [],
  deletedFiles: [],
};

const getDeletionDate = () => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
// Редюсер
const conversionHistoryReducer = (
  state: ConversionHistoryState = initialState,
  action: ConversionHistoryReducerActionType
): ConversionHistoryState => {
  switch (action.type) {
    case 'SOFT_DELETE_FILE': {
      const file = state.files.find((file) => file.id === action.payload);
      const deletionDate = getDeletionDate();
      return {
        ...state,
        files: state.files.filter((file) => file.id !== action.payload),
        deletedFiles: [
          ...state.deletedFiles,
          ...(file ? [{ ...file, deletionDate }] : []),
        ],
      };
    }
    case 'DELETE_FILE':
      return {
        ...state,
        deletedFiles: state.deletedFiles.filter(
          (file) => file.id !== action.payload
        ),
      };
    case 'DOWNLOAD_FILE': {
      const file = state.files.find((file) => file.id === action.payload);
      if (file !== undefined) {
        const anchor = document.createElement('a');
        anchor.setAttribute('href', file?.link);
        anchor.setAttribute('download', '');
        document.body.appendChild(anchor);
        anchor.click();
        anchor.parentNode?.removeChild(anchor);
      }
      return state;
    }
    case 'CANCEL_DELETE_FILE': {
      const file = state.deletedFiles.find(
        (file) => file.id === action.payload
      );

      return {
        ...state,
        files: [...state.files, ...(file ? [file] : [])],
        deletedFiles: state.deletedFiles.filter(
          (file) => file.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default conversionHistoryReducer;
