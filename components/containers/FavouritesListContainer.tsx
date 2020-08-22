import React from 'react';
import styled from 'styled-components';
import JokesList from '../lists/jokes/JokesList';
import JokesListTitle from '../titles/JokesListTitle';
import PlayPauseButton from '../buttons/PlayPauseButton';

interface IFavouritesListContainerProps {
    title: string;
    jokes: IJoke[];
}

const FavouritesListContainer: React.FC<IFavouritesListContainerProps> = ({
    title,
    jokes,
}) => {
    return (
        <Container>
            <JokesListTitle>
                <h2>{title}</h2>
            </JokesListTitle>
            <JokesList items={jokes} />
            <PlayPauseButton isRunning={false} />
        </Container>
    );
};

export default FavouritesListContainer;

const Container = styled.article`
    height: 100%;
    display: flex;
    flex-direction: column;
`;
