import React from 'react';
import FloatingButton from './FloatingButton';
import {
    favouritesActions,
    useFavouritesDispatch,
} from '../../lib/withFavourites';
import {
    selectJokeActions,
    useSelectedJokeDispatch,
    useSelectedJokeState,
} from '../../lib/withJokeSelect';
import { deleteJokeFromFavourites } from '../../lib/jokes';

const DeleteFavouriteButton: React.FC = ({}) => {
    const favouritesDispatch = useFavouritesDispatch();
    const selectedJokeState = useSelectedJokeState();
    const selectedJokeDispatch = useSelectedJokeDispatch();

    const selectedJoke = selectedJokeState.selectedJoke;
    const hidden = !selectedJoke.id;

    const handleCLick = () => {
        deleteJokeFromFavourites(selectedJoke.id).then((result) => {
            if (result.success) {
                favouritesDispatch(
                    favouritesActions.deleteFavourite(selectedJoke)
                );
                selectedJokeDispatch(selectJokeActions.reset());
            }
        });
    };
    return (
        <FloatingButton onClick={handleCLick} hidden={hidden}>
            Delete
        </FloatingButton>
    );
};

export default DeleteFavouriteButton;
