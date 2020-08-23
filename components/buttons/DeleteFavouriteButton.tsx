import React from 'react';
import { useToasts } from 'react-toast-notifications';
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

/**
 * attempts to delete the selected joke from the selected joke then updates
 * the selected joke context and alerts the user
 * @param children
 * @constructor
 */
const DeleteFavouriteButton: React.FC = ({ children }) => {
    const favouritesDispatch = useFavouritesDispatch();
    const selectedJokeState = useSelectedJokeState();
    const selectedJokeDispatch = useSelectedJokeDispatch();
    const { addToast } = useToasts();

    const selectedJoke = selectedJokeState.selectedJoke;
    const hidden = !selectedJoke.id;

    const handleCLick = () => {
        deleteJokeFromFavourites(selectedJoke.id).then((result) => {
            if (result.success) {
                favouritesDispatch(
                    favouritesActions.deleteFavourite(selectedJoke)
                );
                selectedJokeDispatch(selectJokeActions.reset());
                addToast('Successfully deleted', {
                    appearance: 'success',
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
        <FloatingButton onClick={handleCLick} hidden={hidden}>
            {children}
        </FloatingButton>
    );
};

export default DeleteFavouriteButton;
