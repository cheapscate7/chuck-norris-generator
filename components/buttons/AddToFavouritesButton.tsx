import React from 'react';
import FloatingButton from './FloatingButton';
import {
    favouritesActions,
    useFavouritesDispatch,
    useFavouritesState,
} from '../../lib/withFavourites';
import { useSelectedJokeState } from '../../lib/withJokeSelect';
import { addJokeToFavourites } from '../../lib/jokes';
import DeleteFavouriteButton from './DeleteFavouriteButton';

const AddToFavouritesButton: React.FC = () => {
    const favouritesState = useFavouritesState();
    const selectedJokeState = useSelectedJokeState();

    const selectedJoke = selectedJokeState.selectedJoke;
    const favourites = favouritesState.favourites;

    const isInFavourites = favourites.some(
        (favourite) => favourite.id === selectedJoke.id
    );

    if (isInFavourites) {
        return (
            <DeleteFavouriteButton>
                Remove From Favourites
            </DeleteFavouriteButton>
        );
    } else {
        const favouritesDispatch = useFavouritesDispatch();
        const hidden = !selectedJoke.id;
        const handleAddToFavourites = () => {
            addJokeToFavourites(false, selectedJoke.id).then((result) => {
                if (result.success) {
                    favouritesDispatch(
                        favouritesActions.addFavourite(result.joke)
                    );
                }
            });
        };

        return (
            <FloatingButton onClick={handleAddToFavourites} hidden={hidden}>
                Add to Favourites
            </FloatingButton>
        );
    }
};

export default AddToFavouritesButton;
