import React from 'react';
import styled from 'styled-components';
import JokesList from '../lists/jokes/JokesList';
import JokesListTitle from '../titles/JokesListTitle';

interface IJokesListContainerProps {
    title: string;
    jokes: IJoke[];
}

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
