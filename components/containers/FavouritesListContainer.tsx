import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useToasts } from 'react-toast-notifications';
import JokesList from '../lists/jokes/JokesList';
import JokesListTitle from '../titles/JokesListTitle';
import PlayPauseButton from '../buttons/PlayPauseButton';
import {
    favouritesActions,
    useFavouritesDispatch,
    useFavouritesState,
} from '../../lib/withFavourites';
import { addJokeToFavourites } from '../../lib/jokes';

interface IFavouritesListContainerProps {
    title: string;
}

/**
 * displays a list of favourited memes with a title and a button
 * onclick, the button runs a setInterval callback which attempts to save the joke to favourites
 * if that succeeds then the favourites context is updated.
 *
 * @param title the title of the list
 * @constructor
 */
const FavouritesListContainer: React.FC<IFavouritesListContainerProps> = ({
    title,
}) => {
    const [isRunning, setIsRunning] = useState(false);
    const favouritesDispatch = useFavouritesDispatch();
    const favouritesState = useFavouritesState();
    const { addToast } = useToasts();

    const handlePlayPause = () => {
        setIsRunning(!isRunning);
    };

    const repeaterCallback = () => {
        addJokeToFavourites(true, null).then((resp) => {
            if (resp.success) {
                favouritesDispatch(favouritesActions.addFavourite(resp.joke));
                addToast('Added to favourites', {
                    appearance: 'success',
                    autoDismiss: true,
                });
            } else if (resp.message === 'favourite_already_exists') {
                repeaterCallback();
            } else {
                addToast('Maximum Favourites reached', {
                    appearance: 'error',
                    autoDismiss: true,
                });
                setIsRunning(false);
            }
        });
    };

    useEffect(() => {
        let repeater = null;
        if (isRunning) {
            repeater = setInterval(repeaterCallback, 5000);
        } else if (!isRunning) {
            clearInterval(repeater);
        }
        return () => clearInterval(repeater);
    }, [isRunning]);

    return (
        <Container>
            <JokesListTitle>
                <h2>
                    {title} ({favouritesState.favourites.length})
                </h2>
            </JokesListTitle>
            <JokesList items={favouritesState.favourites} />
            <PlayPauseButton callback={handlePlayPause} isRunning={isRunning} />
        </Container>
    );
};

export default FavouritesListContainer;

const Container = styled.article`
    height: 100%;
    display: flex;
    flex-direction: column;
`;
