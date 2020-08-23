import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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

const FavouritesListContainer: React.FC<IFavouritesListContainerProps> = ({
    title,
}) => {
    const [isRunning, setIsRunning] = useState(false);
    const favouritesDispatch = useFavouritesDispatch();
    const favouritesState = useFavouritesState();

    const handlePlayPause = () => {
        setIsRunning(!isRunning);
    };

    const repeaterCallback = () => {
        addJokeToFavourites(true, null).then((resp) => {
            if (resp.success) {
                favouritesDispatch(favouritesActions.addFavourite(resp.joke));
            } else if (resp.message === 'favourite_already_exists') {
                repeaterCallback();
            } else {
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
                <h2>{title}</h2>
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
