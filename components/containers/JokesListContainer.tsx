import React from 'react';
import styled from 'styled-components';
import JokesList from '../lists/jokes/JokesList';
import JokesListTitle from '../titles/JokesListTitle';

interface IJokesListContainerProps {
    title: string;
    jokes: IJoke[];
}

/**
 * contains a list of random memes + a title
 * unlike with the favourites list container, random jokes are prerendered so
 * they need to be passed to this container instead of being placed in a context provider
 * @param title     the name of the container
 * @param jokes     the jokes to be displayed
 * @constructor
 */
const JokesListContainer: React.FC<IJokesListContainerProps> = ({
    title,
    jokes,
}) => {
    return (
        <Container>
            <JokesListTitle>
                <h2>{title}</h2>
            </JokesListTitle>
            <JokesList items={jokes} />
        </Container>
    );
};

export default JokesListContainer;

const Container = styled.article`
    height: 100%;
    display: flex;
    flex-direction: column;
`;
