import React from 'react';
import { useToasts } from 'react-toast-notifications';
import FloatingButton from './FloatingButton';
import {
    favouritesActions,
    useFavouritesDispatch,
    useFavouritesState,
} from '../../lib/withFavourites';
import { useSelectedJokeState } from '../../lib/withJokeSelect';
import { addJokeToFavourites } from '../../lib/jokes';
import DeleteFavouriteButton from './DeleteFavouriteButton';

/**
 * attempts to add the selected meme to the backend then updates the selected joke state
 * this also needs to be contained within a favourites reducer so that the button knows
 * whether the meme it is related to is already in the favourites. If it is then
 * <DeleteFavouriteButton> is shown
 * @constructor
 */
const AddToFavouritesButton: React.FC = () => {
    const favouritesState = useFavouritesState();
    const selectedJokeState = useSelectedJokeState();
    const { addToast } = useToasts();

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
                    addToast('Added to favourites', {
                        appearance: 'success',
                        autoDismiss: true,
                    });
                } else if (result.message === 'maximum_reached') {
                    addToast('Maximum Favourites reached', {
                        appearance: 'error',
                        autoDismiss: true,
                    });
                } else {
                    addToast('Something went wrong', {
                        appearance: 'error',
                        autoDismiss: true,
                    });
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
