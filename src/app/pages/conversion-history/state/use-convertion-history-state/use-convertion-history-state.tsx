import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useReducer,
} from 'react';
import conversionHistoryReducer, {
  ConversionHistoryReducerActionType,
  ConversionHistoryState,
} from '../conversion-history-reducer/conversion-history-reducer';
import { files } from '../../../fakeData';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConvertionHistoryStateValue {
  state: ConversionHistoryState;
  dispatch: Dispatch<ConversionHistoryReducerActionType>;
}
const ConvertionHistoryStateContext =
  createContext<ConvertionHistoryStateValue>({} as ConvertionHistoryStateValue);
const initialState: ConversionHistoryState = {
  files: [...files],
  deletedFiles: [],
};

export const ConvertionHistoryStateProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(conversionHistoryReducer, initialState);

  return (
    <ConvertionHistoryStateContext.Provider value={{ state, dispatch }}>
      {children}
    </ConvertionHistoryStateContext.Provider>
  );
};

const useConvertionHistoryState = () =>
  React.useContext(ConvertionHistoryStateContext);

export default useConvertionHistoryState;
