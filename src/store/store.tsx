import { createContext, useReducer } from 'react';
import { MAbout } from '../models/about';
import { TAbout, TAboutData } from '../definitions/about';

type TState = { about: TAbout };

type TAction = { type: 'ADD_ABOUT_DATA'; payload: TAboutData };

const counterReducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case 'ADD_ABOUT_DATA':
      return {
        ...state,
        about: {
          data: action.payload,
          status: 'loaded',
        },
      };

    default:
      return state;
  }
};

const initialState = {
  about: MAbout,
};
const AppContext = createContext<{
  state: TState;
  dispatch: React.Dispatch<TAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

type ContextProviderProps = {
  children: React.ReactNode;
};

function StateProvider({ children }: ContextProviderProps) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, StateProvider };
