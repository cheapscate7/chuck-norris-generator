import React, { useState } from 'react';
import styled from 'styled-components';
import { useToasts } from 'react-toast-notifications';
import JokesList from '../lists/jokes/JokesList';
import JokesListTitle from '../titles/JokesListTitle';
import { getRandomJokes } from '../../lib/jokes';
import RandomiseButton from '../buttons/RandomiseButton';

interface IJokesListContainerProps {
    title: string;
}

/**
 * contains a list of random memes + a title
 * unlike with the favourites list container, random jokes are called from a button
 * @param title     the name of the container
 * @constructor
 */
const JokesListContainer: React.FC<IJokesListContainerProps> = ({ title }) => {
    const [jokes, setJokes] = useState([]);
    const { addToast } = useToasts();

    const handleClick = async () => {
        getRandomJokes().then((result) => {
            if (result.type === 'success') {
                setJokes(result.value);
                addToast('Random jokes found', {
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
        <Container>
            <JokesListTitle>
                <h2>{title}</h2>
            </JokesListTitle>
            <JokesList items={jokes} />
            <RandomiseButton
                listIsPopulated={jokes.length > 0}
                callback={handleClick}
            />
        </Container>
    );
};

export default JokesListContainer;

const Container = styled.article`
    height: 100%;
    display: flex;
    flex-direction: column;
`;
