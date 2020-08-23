import React from 'react';
import FloatingButton from './FloatingButton';
import {
    favouritesActions,
    useFavouritesDispatch,
} from '../../lib/withFavourites';
import { useSelectedJokeState } from '../../lib/withJokeSelect';
import { deleteJokeFromFavourites } from '../../lib/jokes';

const DeleteFavouriteButton: React.FC = ({}) => {
    const favouritesDispatch = useFavouritesDispatch();
    const selectedJokeState = useSelectedJokeState();

    const selectedJoke = selectedJokeState.selectedJoke;
    const hidden = !selectedJoke.id;

    const handleCLick = () => {
        deleteJokeFromFavourites(selectedJoke.id).then((result) => {
            result.success &&
                favouritesDispatch(
                    favouritesActions.deleteFavourite(selectedJoke)
                );
        });
    };
    return (
        <FloatingButton onClick={handleCLick} hidden={hidden}>
            Delete
        </FloatingButton>
    );
};

export default DeleteFavouriteButton;
