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

    const handleCLick = () => {
        deleteJokeFromFavourites(selectedJokeState.selectedJoke.id).then(
            (result) => {
                result.success &&
                    favouritesDispatch(
                        favouritesActions.deleteFavourite(
                            selectedJokeState.selectedJoke
                        )
                    );
            }
        );
    };
    return <FloatingButton onClick={handleCLick}>Delete</FloatingButton>;
};

export default DeleteFavouriteButton;
