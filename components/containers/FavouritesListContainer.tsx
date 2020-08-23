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
import { addJokeToFavourites, getRandomJoke } from '../../lib/jokes';

interface IFavouritesListContainerProps {
    title: string;
    // jokes: IJoke[];
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

    useEffect(() => {
        let repeater = null;
        if (isRunning) {
            repeater = setInterval(() => {
                if (favouritesState.favourites.length < 10) {
                    getRandomJoke().then((joke) => {
                        addJokeToFavourites(joke).then((resp) => {
                            if (resp.success) {
                                favouritesDispatch(
                                    favouritesActions.addFavourite(joke)
                                );
                            } else if (resp.message === 'maximum_reached') {
                                setIsRunning(false);
                            }
                        });
                    });
                }
            }, 5000);
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
