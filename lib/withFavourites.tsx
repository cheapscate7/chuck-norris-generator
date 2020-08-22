import React, { useReducer } from 'react';

export const initialState: IWithFavouritesState = {
    favourites: [],
};

enum Actions {
    FavouritesSet,
    FavouritesAdd,
    FavourtitesDelete,
    StateCleared,
}

export const favouritesActions = {
    reset() {
        return {
            type: Actions.StateCleared,
        } as const;
    },
    addFavourite(obj: IJoke) {
        return {
            payload: obj,
            type: Actions.FavouritesAdd,
        } as const;
    },
    deleteFavourite(obj: IJoke) {
        return {
            payload: obj,
            type: Actions.FavourtitesDelete,
        } as const;
    },
    setFavourites(favourites: IJoke[]) {
        return {
            payload: favourites,
            type: Actions.FavourtitesDelete,
        } as const;
    },
};
interface IAction {
    type: Actions;
    payload: any;
}
function reducer(
    state: IWithFavouritesState,
    action: IAction
): IWithFavouritesState {
    if (action.type === Actions.FavouritesAdd) {
        return {
            favourites: state.favourites.concat(action.payload),
        };
    } else if (action.type === Actions.FavourtitesDelete) {
        return {
            favourites: state.favourites.filter(
                (favourite) => favourite.id !== action.payload.id
            ),
        };
    } else if (action.type === Actions.FavouritesSet) {
        return {
            favourites: action.payload,
        };
    } else if (action.type === Actions.StateCleared) {
        return initialState;
    } else {
        return state;
    }
}

const FavouritesStateContext = React.createContext<
    Partial<IWithFavouritesState>
>(initialState);
const FavouritesDispatchContext = React.createContext(null);

interface IFavouritesProviderProps {
    favourites?: IJoke[];
}
export const FavouritesProvider: React.FC<IFavouritesProviderProps> = ({
    children,
    favourites,
}) => {
    const initial_state = favourites
        ? {
              favourites: initialState.favourites.concat(favourites),
          }
        : initialState;
    const [favouritesState, favouritesDispatch] = useReducer(
        reducer,
        initial_state
    );

    return (
        <FavouritesStateContext.Provider value={favouritesState}>
            <FavouritesDispatchContext.Provider value={favouritesDispatch}>
                {children}
            </FavouritesDispatchContext.Provider>
        </FavouritesStateContext.Provider>
    );
};

export const useFavouritesState = () => {
    const context = React.useContext(FavouritesStateContext);
    if (context === undefined) {
        throw new Error(
            'useFavouritesState must be used within a FavouritesProvider'
        );
    } else {
        return context;
    }
};

export const useFavouritesDispatch = () => {
    const context = React.useContext(FavouritesDispatchContext);
    if (context === undefined) {
        throw new Error(
            'useFavouritesDispatch must be used within a FavouritesProvider'
        );
    } else {
        return context;
    }
};
