import React, { useReducer } from 'react';

export const initialState: IWithJokeSelectState = {
    selectedJoke: {
        id: null,
        joke: '',
        categories: [],
    },
};

enum Actions {
    SelectedJokeSet,
    StateCleared,
}

export const selectJokeActions = {
    reset() {
        return {
            type: Actions.StateCleared,
        } as const;
    },
    setSelectedJoke(obj: IJoke) {
        return {
            payload: obj,
            type: Actions.SelectedJokeSet,
        } as const;
    },
};
interface IAction {
    type: Actions;
    payload: any;
}
function reducer(
    state: IWithJokeSelectState,
    action: IAction
): IWithJokeSelectState {
    if (action.type === Actions.SelectedJokeSet) {
        return {
            selectedJoke: action.payload,
        };
    } else if (action.type === Actions.StateCleared) {
        return initialState;
    } else {
        return state;
    }
}

const SelectedJokeStateContext = React.createContext<
    Partial<IWithJokeSelectState>
>(initialState);
const SelectedJokeDispatchContext = React.createContext(null);

export const SelectedJokeProvider: React.FC = ({ children }) => {
    const [searchState, searchDispatch] = useReducer(reducer, initialState);

    return (
        <SelectedJokeStateContext.Provider value={searchState}>
            <SelectedJokeDispatchContext.Provider value={searchDispatch}>
                {children}
            </SelectedJokeDispatchContext.Provider>
        </SelectedJokeStateContext.Provider>
    );
};

export const useSelectedJokeState = () => {
    const context = React.useContext(SelectedJokeStateContext);
    if (context === undefined) {
        throw new Error(
            'useSelectedJokeState must be used within a SelectedJokeProvider'
        );
    } else {
        return context;
    }
};

export const useSelectedJokeDispatch = () => {
    const context = React.useContext(SelectedJokeDispatchContext);
    if (context === undefined) {
        throw new Error(
            'useSelectedJokeDispatch must be used within a SelectedJokeProvider'
        );
    } else {
        return context;
    }
};
