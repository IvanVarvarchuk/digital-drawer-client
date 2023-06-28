import {
  createContext,
  useContext,
  useReducer,
  PropsWithChildren,
  FC,
  Dispatch,
} from 'react';
import reducer, {
  ConvertionReducerState,
  ConvertionReducerActionType,
} from '../convertion-reducer/convertion-reducer';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
const initialState: ConvertionReducerState = {
  file: null,
  queue: [],
  taskId: null,
  isLoading: false,
};

export type ConvertionContextValue = {
  state: ConvertionReducerState;
  dispatch: Dispatch<ConvertionReducerActionType>;
};

const ConvertionContext = createContext<ConvertionContextValue>(
  {} as ConvertionContextValue
);

export const ConvertionContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ConvertionContext.Provider value={{ state, dispatch }}>
      {children}
    </ConvertionContext.Provider>
  );
};

export const useConvertionState = () => useContext(ConvertionContext);

export default useConvertionState;
